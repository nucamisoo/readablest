chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "ON") {
            alert("Got ON message in content.js");
            document.body.style.background = "blue";
            alert(document.getElementById("text").innerText);
            const uttr = new SpeechSynthesisUtterance(document.getElementById("text").innerText);
            uttr.lang = "en-US"
            speechSynthesis.speak(uttr);
        } else {
            alert("Something went wrong.");
        }
    }
);