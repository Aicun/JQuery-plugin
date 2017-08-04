$(document).ready(function(){
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
              "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorp";
    
    $.getJSON(url,function(data){
        var html = "";
        $.each(data.items,function(i,item){
            html += "<h3>" + item.title + "</h3>";
            html += item.description;
            html = html.replace("<p><a href=\"http:\/\/www.flickr.com\/people\/82407828@N07\/\">zakruvalcaba<\/a> posted a photo:<\/p>","");
        });
        $("#team").html(html);
    });

    var searchTerm = "";
    $("#btnSearch").click(function(){
        searchTerm = $("#search").val();
        if(searchTerm == ""){
            alert("Enter a tag to search");
        }else {
            url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
                "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";
            $.getJSON(url,function(data){
                var html = "";
                $.each(data.items,function(i,item){
                    html += "<h2>" + item.title + "</h2>";
                    html += "<img src=" + item.media.m + ">";
                    html += "<p><b>Tags: </b>" + item.tags +"</p>";
                });
                $("#photos").html(html);
            });
        }

    });
});