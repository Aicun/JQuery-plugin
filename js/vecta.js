$(document).ready(function(){
    $("#tabs").tabs();
    
    $("#help").click(function(){
        $("#helpdialog").dialog({
            buttons:{OK:function(){$(this).dialog("close");}}
        });
    });

    $("#datepicker").datepicker({
        minDate:new Date(),
        showButtonPanel:true
    });

    $("#submitbutton").button();

    $("#slider").slider({
        min:1,
        max:100,
        range:true,
        values:[20,60],
        slide: function(event,ui){
            $("#employees").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#employees").val(11 + " - " + 50);
});