# build a fake password control into page
$ ->
  # hide download links
  $("a[href*='cardactivex.exe']").hide()

  # build fake password control with regular html element
  $("object[classid='clsid:305C213C-780C-432D-8417-23E53F2EE830']").each ->
    id = $(this).attr("id")
    password_control = $("<input>").val("szuauth").attr
      "type": "password",
      "disabled": "disabled",
      "width": $(this).attr("width")
    $(this).append(password_control)

    # get hashed password from extension's storage
    chromex "getHashPassword", [], (result) ->
      script = document.createElement("script")
      script.text = "#{id}.text = '#{result}';"
      document.head.appendChild(script)
