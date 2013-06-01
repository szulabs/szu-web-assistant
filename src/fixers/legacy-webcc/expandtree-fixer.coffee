EMBED_URL = "/lib/fixers/legacy-webcc/embed/expandtree.js"

$ ->
  # fix the broken expandtree in chrome
  expandTree = document.createElement("script")
  expandTree.type = "text/javascript"
  expandTree.src = chrome.extension.getURL(EMBED_URL)
  document.head.appendChild(expandTree)
