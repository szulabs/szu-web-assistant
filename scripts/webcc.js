$(function(){
	var altAlert = 'window.alert = function(message) {' +
	'	window.top.window.frames["topFrame"].msgbox.notice(message);' +
	'};';
	var altAlertTag = document.createElement("script");
	altAlertTag.type = "text/javascript";
	altAlertTag.text = altAlert;
	document.head.appendChild(altAlertTag);

	if (window.name != "topFrame") {
		return;
	}

	// 引入 jquery 和基础样式
	var jqTag = document.createElement("script");
	jqTag.type = "text/javascript";
	jqTag.src = chrome.extension.getURL("/scripts/jquery.min.js");
	document.head.appendChild(jqTag);
	
	var msgStyleTag = document.createElement("link");
	msgStyleTag.type = "text/css";
	msgStyleTag.href = chrome.extension.getURL("styles/messagebox.css");
	msgStyleTag.rel = "stylesheet";
	document.head.appendChild(msgStyleTag);
	
	// 信息框容器
	$("body").prepend($('<div>').attr("id", "message-box"));
	
	var createMsgbox = function() {
		var msgbox = new Object();
		msgbox._show = function(message, timeout, specialClass) {
			var entity = $('<div>').addClass("message-content").hide()
				.append($('<span>').addClass("message-text").append(message))
				.append($('<a>').addClass("button message-close-btn").html("关闭").attr("href", "javascript:void(0);"))
				.addClass(specialClass);
			
			$('#message-box').append(entity);
			entity.slideDown(500);
			
			if (timeout > 0) {
				setTimeout(function(){
					entity.slideUp(300, function(){ $(this).remove(); });
				}, timeout);
			}
			
			entity.children('a.message-close-btn').click(function(){
				entity.slideUp(200, function(){ $(this).remove(); });
			});
		};
		msgbox.notice = function(msg, timeout) { this._show(msg, timeout, 'notice'); };
		msgbox.alert  = function(msg, timeout) { this._show(msg, timeout, 'alert');  };
		msgbox.error  = function(msg, timeout) { this._show(msg, timeout, 'error'); };
		return msgbox;
	};
	
	// 注入
	var msgTag = document.createElement("script");
	msgTag.type = "text/javascript";
	msgTag.text = "window.msgbox = (" + createMsgbox + ")();";
	document.head.appendChild(msgTag);
});