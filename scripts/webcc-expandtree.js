!(function() {
    var pattern = /expandTree\('(\w+)'\),change_navigation\('(.+)'\)/;

    var hide_element = function(element) {
        if (element.style) {
             element.style.display = "none";
        }
    };

    var toggle_element = function(element) {
        if (element.style && element.style.display == "none")  {
            element.style.display = "block"; 
        } else  { 
            element.style.display = "none";
        }  
    };

    var expand_tree = function (treename){   
        var current_node = document.getElementById(treename + "sub");
        var all_div = document.getElementsByTagName("div");

        for (var i in all_div)  {
            hide_element(all_div[i]);
        }

        toggle_element(current_node);
    };

    var nodes = document.getElementsByClassName('bottom2');
    for(var i in nodes) {
        if (typeof nodes[i].onclick == "undefined") {
            return;
        }
        (function() {
            var result = pattern.exec(nodes[i].onclick.toString());
            if (result && result.length == 3) {
                var course_id = result[1];
                var course_name = result[2];
                nodes[i].onclick = function(event) {
                    expand_tree(course_id);
                    change_navigation(course_name);
                };
            }
        })();
    }
})();
