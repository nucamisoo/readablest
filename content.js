chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "ON") {
            alert("Got ON message in content.js");
            document.body.style.background = "blue";
        } else {
            alert("Something went wrong.");
        }
    }
);