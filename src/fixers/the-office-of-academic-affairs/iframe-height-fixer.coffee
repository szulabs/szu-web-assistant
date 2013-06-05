# adjust the iframe's height of page layout
$ ->
  resizerPattern = /expression\(([a-zA-Z][a-zA-Z0-9]*\(\))\)/
  $("iframe[style*='expression']").each ->
    matches = resizerPattern.exec($(this).attr("style")).slice(1)
    scriptTag = document.createElement("script")
    scriptTag.type = "text/javascript"
    scriptTag.text = matches.join(";") + ";"
    document.head.appendChild(scriptTag)
