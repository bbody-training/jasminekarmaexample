var APP_NAME = "The App Name";

function getUrl() {
	return window.location.href;
}

function cacheBreak(){
	var breaker = Math.floor((Math.random() * 100) + 1);
	return getUrl() + "?" + breaker;
}

function appName(){
	return APP_NAME;
}