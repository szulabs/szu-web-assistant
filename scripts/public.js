(function(window){
	var chromex = window.chromex = function(method, args, callback) {
		chrome.runtime.sendMessage({method: method, args: args}, function(response){
			callback.call(chromex, response.result);
		});
	};

	// option support
	var HASH_PWD_KEY = "hash-password";
	chromex.setHashPassword = function(value) {
		window.localStorage[HASH_PWD_KEY] = value;
	};
	chromex.getHashPassword = function() {
		var value = window.localStorage[HASH_PWD_KEY];
		if (typeof value == "undefined") {
			return "";
		} else {
			return value;
		}
	};
	
	
})(window);
