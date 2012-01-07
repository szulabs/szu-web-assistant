$(function(){
	var urlPattern = /playnow\("([a-zA-Z0-9\./\:]+)"\)/;
	var url = "";
	$("script").each(function(){
		var text = $(this).text();
		if (urlPattern.test(text)) {
			url = urlPattern.exec(text)[1];
		}
	});
	var mediaplayer = $("object#MediaPlayer").removeAttr("CLASSID")
		.attr("type", "video/x-ms-wmv")
		.attr("data", url)
		.html($("<param>").attr("name", "src").attr("value", url));
});