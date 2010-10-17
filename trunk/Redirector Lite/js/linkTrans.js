window.addEventListener('click', function(e) {
	var link = e.srcElement;

	while(!/^a$/i.test(link.tagName)) {
		if(/^body$/i.test(link.tagName)) {
			return;
		}

		link = link.parentElement;
	}

	if(link.target == '_blank' || link.target == 'new' || link.rel == 'external') {
/*		if(link.href.match(/www\.google\.com(\.\w\w)?\/url\?/i) || link.href.match(/\/url\?q=/i)) {
			linkUrl = decodeURIComponent(linkUrl);
			linkUrl = link.href.replace(/^.+?(http:\/\/.+?)(&ei.+)?$/i, '$1');
		} else if(link.href.match(/webcache\.googleusercontent\.com\/.+ct=clnk/i)) {
			linkUrl = link.href.replace(/&cd=.+&/i, '&');
			linkUrl = linkUrl.replace(/&ct=clnk/i, '&newwindow=1&strip=1');
		} else {*/
			linkUrl = link.href;
//		}
		e.preventDefault();
		var port = chrome.extension.connect({name: 'link'});
		port.postMessage({url: linkUrl});
	}
}, false);
