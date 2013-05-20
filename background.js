chrome.runtime.getBackgroundPage(function(window) {
    var public_script = window.document.createElement("script");
    public_script.src = chrome.runtime.getURL("scripts/public.js");
    window.document.head.appendChild(public_script);

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (!("method" in request)) { request.method = ""; }
        if (!("args" in request)) { request.args = []; }
        if (request.method in chromex) {
            sendResponse({
                result: chromex[request.method].apply(null, request.args)
            });
        } else {
            sendResponse({});
        }
    });
});
