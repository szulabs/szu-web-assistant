chrome.runtime.getBackgroundPage (window) ->
  publicScript = window.document.createElement("script")
  publicScript.src = chrome.runtime.getURL("scripts/public.js")
  window.document.head.appendChild(publicScript)

  chrome.runtime.onMessage.addListener (request, sender, sendResponse) ->
    if request.method? and request.args?
      remoteMethod = chromex[request.method]
      sendResponse(result: remoteMethod.apply(request, request.args))
