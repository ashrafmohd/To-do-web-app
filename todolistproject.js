

$(".getstart").on("click",function()
{
    

     var addname=$("#name").val();
     if(addname=="")
     {
         $(".alert").css("display","block");
     }
     else {
        $(".alert").css("display","none");
     $("#heading").text(addname+ "'s to-do tasks");
     $("#main").css("display","block")
     }
     
     
})






$("ul").on("click","li",function()
{
    $(this).toggleClass("turngray");
});

$("ul").on("click","span",function(event)
{
    $(this).parent().fadeOut(400,function()
    {
        $(this).remove();
    });
    event.stopPropagation();
    });

$("#text").keypress(function(event)
{
if(event.which===13)
{
var addtodo=$(this).val();
$("ul").append("<li> <span>X </span>" +addtodo+"</li>");
}

});

$("#toggs").click(function()
{
    $("#text").fadeToggle();
});

$("#reset").click(function()
{
    $("li").fadeOut(function()
    {
        $("li").remove();
    });
})