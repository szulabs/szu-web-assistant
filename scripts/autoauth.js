/**
 * 自动填充校园卡查询密码
 * 
 * author: tonyseek
 */
$(function(){
    $("a[href*='cardactivex.exe']").hide();
    $("object[classid='clsid:305C213C-780C-432D-8417-23E53F2EE830']").each(function(){
        var id = $(this).attr("id");

        $("<input>").attr("type", "password")
            .attr({"disabled": "disabled",
                   "width": $(this).attr("width")})
            .val("szuauth")
            .appendTo($(this));

        chromex("getHashPassword", [], function(result){
            var script = document.createElement("script");
            script.text = id + ".text = '" + result + "';";
            document.head.appendChild(script);
        });
    });
});
