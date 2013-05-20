$(function(){
    // diable selectable
    $("*").on("selectstart", function(event) {
        event.preventDefault();
    });

    // tabs
    var LAST_TAB = "quick-index-last-tab";
    if (window.location.hash) {
        $("a[href='" + window.location.hash + "']").trigger("click");
    }
    if (window.localStorage[LAST_TAB]) {
        $("a[href='#" + window.localStorage[LAST_TAB] + "']").trigger("click");
    }

    $('#tabs-content > div[class!="active"]').hide();
    $('#tabs').bind('change', function (e) {
        var activated = $(e.target).attr("href");
        var previous = $(e.relatedTarget).attr("href");
        $(previous).hide();
        $(activated).show();
        window.localStorage[LAST_TAB] = $(activated).attr("id");
        console.log(window.localStorage[LAST_TAB]);
    });

    // messagebox
    $("#saveSuccessMsg").hide();
    $("#invalidMsg").hide();

    var showMsg = function(selector) {
        $(selector).slideDown();
        $(selector + " .close").click(function() {
          $(selector).slideUp();
          return false;
        });
    };

    // option
    $("#hashpwd").val(chromex.getHashPassword())
    $("#hashpwdConfirm").click(function(){
        var value = $("#hashpwd").val();
        if (!(/^[0-9A-F]{16}$/.test(value))) {
            showMsg("#invalidMsg");
            return;
        }
        chromex.setHashPassword(value);
        showMsg("#saveSuccessMsg");
    });
});
