(function(window){
	var szu = new Object();
	
	// option support
	var HASH_PWD_KEY = "hash-password";
	szu.setHashPassword = function(value) {
		window.localStorage[HASH_PWD_KEY] = value;
	}
	szu.getHashPassword = function() {
		var value = window.localStorage[HASH_PWD_KEY];
		if (typeof value == "undefined") {
			return "";
		} else {
			return value;
		}
	}
	
	window.szu = szu;
})(window);