function getCurrentUrl() {
	return window.location.href;
}

function getCacheBrokenUrl() {
	var breaker = Math.floor((Math.random() * 100) + 1);
	return getCurrentUrl() + "?" + breaker;
}