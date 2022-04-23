chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "ON") {
            var allTags = document.getElementsByTagName('*');

            for (var i = 0; i < allTags.length; i++) {
                allTags.item(i).style.border = "solid 1px blue"
            }

            window.addEventListener("click", function(e) {
                
                //e.preventDefault();

                var x = e.clientX;
                var y = e.clientY;
                var z = document.elementFromPoint(x, y);

                const uttr = new SpeechSynthesisUtterance(z.textContent);
                uttr.lang = "en-US"
                speechSynthesis.speak(uttr);

                // send a messaage to the background.js
                chrome.runtime.sendMessage({
                    msg: "This is a message from content.js",
                    endpoint: request.endpoint,
                    text: z.textContent,
                }, function(response) {
                    // Thanks to: [CSS Tooltip](https://www.w3schools.com/css/css_tooltip.asp)
                    // Thanks to: [【JavaScript入門】要素を追加する方法のまとめ](https://kita-note.com/js-summary-of-how-to-add-elements)
                    z.classList.add("tooltip");
                    var newElement = document.createElement("span");
                    var newContent = document.createTextNode(response.translatedText);
                    newElement.appendChild(newContent);
                    newElement.classList.add("tooltiptext");
                    z.insertBefore(newElement, z.firstChild);
                });
            });

        } else {
            alert("Something went wrong.");
        }
    }
);