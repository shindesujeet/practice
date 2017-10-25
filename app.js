
$(document).ready(function(){
    $("#flip").click(function(){
        $("#main").slideToggle("slow");
    });
});

$(document).ready(function(){
    $('#mybtn').click(function(){
        $('#container').after("<div class=window id=bar1><button id=close style=float:right; onclick=fun(this)>X</button><div contentEditable=true class=textbox ></div></div>");
        $(".window").draggable();
    });

   $('#mybtn2').click(function(){
        $('#container2').after("<div id=outerDIV><div class=mainROW><div id=closeButton style=text-align:center;><button onclick=funct(this);>X</button></div><div id=arrowDIV><div class=tri-left id=leftArrow></div><div id=hztLine></div><div class=tri-right></div></div></div></div>");
        $('#outerDIV').draggable();
        $('.mainROW').resizable();
    });

   $('#mybtn3').click(function(){
        $('#container3').after("<div id=outerDIV><div class=mainROW1><div id=closeButton style=text-align:center;><button onclick=funct(this);>X</button></div><div id=arrowDIV><div class=tri-left id=leftArrow></div><div id=hztLine></div><div class=tri-right></div></div></div></div>");
        $('#outerDIV').draggable();
        $('.mainROW1').resizable();
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
	$(elemObj).parent().remove();
}

function funct(elemObj)
{
	$(elemObj).parent().parent().remove();
}

function function1(elemObj)
{
    $(elemObj).parent().parent().remove();
}

function removeid(elemobj){
    $(elemobj).parent().parent().children().first().css("display","none");
}

function k(obj){
    $(obj).parent().parent().children().first().css("display","block");
}

function remov(){
    $("#pic").remove();
}

  var countDownDate = new Date("Jan 1, 2018 00:00:01").getTime();

  var x = setInterval(function(){
 
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 
1000);