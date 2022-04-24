function tabsQuery(message) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        const url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, {
            msg: message,
            endpoint: api.endpoint,
        }, function (response) {
        });
    });
}

document.getElementById("btn-on").addEventListener("click", function(){tabsQuery("ON")});
document.getElementById("btn-off").addEventListener("click", function(){tabsQuery("OFF")});