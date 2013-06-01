$ ->
  urlPattern = /playnow\(['"]([a-zA-Z0-9\.\/\:]+)["']\)/
  url = ""
  $("script").each ->
    text = $(this).text()
    if urlPattern.test(text)
      url = urlPattern.exec(text)[1]
  mediaPlayerParam = $("<param>").attr(name: "src", value: url)
  mediaPlayer = $("object#MediaPlayer").removeAttr("CLASSID").attr
    "type": "video/x-ms-wmv",
    "data": url,
  mediaPlayer.append(mediaPlayerParam)
