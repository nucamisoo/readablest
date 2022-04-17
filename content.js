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
            });

        } else {
            alert("Something went wrong.");
        }
    }
);