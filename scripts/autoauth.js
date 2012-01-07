/**
 * 自动填充校园卡查询密码
 * 
 * author: tonyseek
 */
$(function(){
	$("a[href*='cardactivex.exe']").hide();
	$("object[codeBase^='PasswdEdit']").each(function(){
		var id = $(this).attr("id");
		$("<input>").attr("type", "password")
			.attr("disabled", "disabled")
			.width($(this).attr("width"))
			.val("szuauth")
			.appendTo($(this));
		
		chrome.extension.sendRequest({method: "getHashPassword"}, function(r){
			var script = document.createElement("script");
			script.text = id + ".text = '" + r.result + "';";
			document.head.appendChild(script);
		});
	});
});
