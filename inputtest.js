$(function(){
    $("#logo").click(function(){
        location.href="http://127.0.0.1:5500/inputtest.html";
    });
    var $s2_height=$("#sec2").height();
    $("#start").click(function(){
        $("html,body").stop().animate({
            "scrollTop":$s2_height+"px"
        },700);
    })
    $("#topmenu>li").click(function(){
        var $menu_index=$(this).index()
        $("html,body").stop().animate({
            "scrollTop":($s2_height*$menu_index)+"px"
        },700);
        $(this).css("color","black");
        $("#topmenu>li").eq($menu_index).css("color","#2F214A");
        console.log($menu_index)

    })
});
