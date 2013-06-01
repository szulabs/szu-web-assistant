chrome.runtime.getBackgroundPage (window) ->
  chrome.runtime.onMessage.addListener (message, sender, sendResponse) ->
    if message == "GetHashedPassword"
      sendResponse(window.localStorage["hashed-password"] or "")
