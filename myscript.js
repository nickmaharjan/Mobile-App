$(document).ready(function(){
    $("#para1").click(function(){
        $(this).hide();
    });
    $("#para2").hover(function(){
        alert("No!");
    });
    $("#para3").hover(function(){
        $(this).css("background-color", "pink");
    });
    $("#para4").click(function(){
        $(this).css("font-size", "10px");
    });
    $("#para4").dblclick(function(){
        $(this).css("font-size", "20px");
    });
});
