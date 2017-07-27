(function($){
    $.fn.highlightMenu = function(options) {
        var items = $("li a",$(this));
        items.css("font-family","arial, helvetica, sans-serif")
             .css("font-weight","bold")
             .css("text-decoration","none")
             .css("background-color",options.bgColor)
             .css("color",options.color)
             .css("width",options.linkWidth);
    
        items.mouseover(function(){
            $(this).css("background-color",options.hoverBgColor)
                   .css("color",options.hoverColor);
        });

        items.mouseout(function(){
            $(this).css("background-color",options.bgColor)
                   .css("color",options.color);
        });
    }
})(jQuery);