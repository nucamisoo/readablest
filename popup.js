document.getElementById("btn-on").addEventListener("click", function() {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        const url = tabs[0].url;

        chrome.tabs.sendMessage(
            tabs[0].id,
            {msg: "ON"},
            function (response) {
            });
    });
});

document.getElementById("btn-off").addEventListener('click', function () {
    alert('OFF');
});