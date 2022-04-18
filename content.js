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
                    alert('EN:' + z.textContent + 'JP:' + response.translatedText);
                });
            });

        } else {
            alert("Something went wrong.");
        }
    }
);