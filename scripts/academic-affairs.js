/**
 * 调整教务处网站动态尺寸
 * 
 * author: tonyseek
 */

$(function() {
	var resizerPattern = /expression\(([a-zA-Z][a-zA-Z0-9]*\(\))\)/;
	$("iframe[style*='expression']").each(function(){
		var matches = resizerPattern.exec($(this).attr("style")).slice(1);
		var scriptTag = document.createElement("script");
		scriptTag.type = "text/javascript";
		scriptTag.text = matches.join(";") + ";";
		document.head.appendChild(scriptTag);
		$(this).attr("onload", scriptTag.text);
	});
});
