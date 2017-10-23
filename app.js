
$(document).ready(function(){
    $("#flip").click(function(){
        $("#main").slideToggle("slow");
    });
});

$(document).ready(function(){
    $('#mybtn').click(function(){
        $('#container').append("<div class=window id=bar1><div class=bar><button style=margin-left:10px; onclick=fun(this)>X</button></div><div contentEditable=true class=textbox placeholder=type..></div></div>");
        $(".window").draggable();
    });

   $('#mybtn2').click(function(){
        $('#container2').append("<div class=row12><div class=row1><button style=margin-left:15px onclick=funct(this)>X</button></div><div id=rowid><div class=triangle-left id=part1></div><div id=part2></div><div class=triangle-right id=part3></div></div><div>");
        $(".row12").draggable({handle:".row1"});
    });
   

   $('#mybtn3').click(function(){
        $('#container3').append("<div class=row112><div class=row11><button style=margin-left:15px onclick=function1(this)>X</button></div><div id=rowid><div class=triangle-left id=part1></div><div id=part2></div><div class=triangle-right id=part3></div></div><div>");
        $(".row112").draggable({handle:".row11"});
    });

    $(".textbox").on("click", function(e) {
        $(".window").draggable('disable');
        $(this).find(".textbox").focus();
    });

    $(".textbox").on("blur", function(){
        $(".window").draggable('enable');
    });

}); 

function fun(elemObj)
{
	$(elemObj).parent().parent().remove();
}

function funct(elemObj)
{
	$(elemObj).parent().parent().remove();
}

function function1(elemObj)
{
    $(elemObj).parent().parent().remove();
}

