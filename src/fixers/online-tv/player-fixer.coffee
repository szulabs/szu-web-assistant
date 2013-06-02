$ ->
  pattern = /playnow\(['"]([a-zA-Z0-9\.\/\:]+)["']\)/
  url = $("script").map(-> $(this).text())
                   .filter((i, text) -> pattern.test(text))
                   .map((i, text) -> pattern.exec(text)[1])[0] or ""
  param = $("<param>").attr(name: "src", value: url)
  player = $("object#MediaPlayer").removeAttr("CLASSID").append(param).attr
    "type": "video/x-ms-wmv",
    "data": url
