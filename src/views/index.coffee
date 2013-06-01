$ ->
  # diable selectable
  $("*").on "selectstart", (event) ->
    event.preventDefault()

  # tabs
  LAST_TAB = "quick-index-last-tab"
  if window.localStorage[LAST_TAB]
    $("a[href='##{window.localStorage[LAST_TAB]}']").click()
  if window.location.hash
    $("a[href=#{window.location.hash}]").click()

  $('#tabs-content > div[class!="active"]').hide()
  $('#tabs').bind 'change', (e) ->
    activated = $(e.target).attr("href")
    previous = $(e.relatedTarget).attr("href")
    $(previous).hide()
    $(activated).show()
    window.localStorage[LAST_TAB] = $(activated).attr("id")
    console.log(window.localStorage[LAST_TAB])

  # messagebox
  $("#saveSuccessMsg").hide()
  $("#invalidMsg").hide()

  showMsg = (selector) ->
    $(selector).slideDown()
    $(selector + " .close").click (event) ->
      $(selector).slideUp()
      event.preventDefault()

  # option
  $("#hashpwd").val(window.localStorage["hashed-password"] or "")
  $("#hashpwdConfirm").click ->
    value = $("#hashpwd").val()
    if not /^[0-9A-F]{16}$/.test(value)
      showMsg("#invalidMsg")
    else
      window.localStorage["hashed-password"] = value
      showMsg("#saveSuccessMsg")
