console.log("this is Service Worker");

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		console.log("in background.js: " + request.msg);
		console.log(request.text);

		const params = {
			source: "en",
			target: "ja",
			text: request.text,
		};
		const query = new URLSearchParams(params);
		const url = `${request.endpoint}?${query}`;

		fetch(url)
			.then(response => response.json())
			.then(data => {
				if (data.code == 200) {
					sendResponse({translatedText: data.text});
				} else {
					sendResponse({translatedText: 'Something went wrong'});
				}
			});
		return true;
	}
);