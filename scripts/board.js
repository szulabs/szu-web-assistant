$(function(){
	// 样式调整、清除少用的按钮
	var typeButtons = $("a[href^='?infotype=']").parent("td");
	typeButtons.prev("td[align='right']").remove();
	typeButtons.remove();
	var searchTop = $("input[name='keyword_user']").parent("td").width(360);
	
	// 搜索修复
	var searchForm = $("form[name='fsearch1']").attr("id", "fsearch1").detach();
	searchTop.parent("tr").parent("tbody").parent("table").wrap(searchForm);
	$("form#fsearch1").append($("<input>").attr("type", "hidden")
		.attr("name", "searchb1")
		.val("搜索")
	);
	
	$("a[onclick^='this.document.fsearch1']").click(function(){
		$("form#fsearch1 select[name='search_type']").val("fu");
		$("form#fsearch1 input[name='keyword']").val($(this).text());
		$("form#fsearch1 select[name='dayy']").val("30#一个月");
		$("form#fsearch1").submit();
	}).removeAttr("onclick");

});