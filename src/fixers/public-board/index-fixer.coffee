$ ->
  # fix display problems and remove useless buttons
  typeButtons = $("a[href^='?infotype=']").parent("td")
  typeButtons.prev("td[align='right']").remove()
  typeButtons.remove()
  searchTop = $("input[name='keyword_user']").parent("td").width(360)

  # fix the searching feature
  searchForm = $("form[name='fsearch1']").attr("id", "fsearch1").detach()
  searchTop.parent("tr").parent("tbody").parent("table").wrap(searchForm)
  searchHiddenInput = $("<input>").val("搜索").attr
    "type": "hidden",
    "name": "searchb1",
  $("form#fsearch1").append(searchHiddenInput)

  $("a[onclick^='this.document.fsearch1']").removeAttr("onclick").click ->
    $("form#fsearch1 select[name='search_type']").val("fu")
    $("form#fsearch1 input[name='keyword']").val($(this).text())
    $("form#fsearch1 select[name='dayy']").val("30#一个月")
    $("form#fsearch1").submit()
