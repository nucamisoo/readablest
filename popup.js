document.getElementById("btn-on").addEventListener("click", function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        const url = tabs[0].url;
        alert('ON pressed in the tab:' + url);
    });
});

document.getElementById("btn-off").addEventListener('click', function () {
    alert('OFF');
});