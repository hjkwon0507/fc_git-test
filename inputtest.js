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
        $("#topmenu>li").css("color","black");
        $("#topmenu>li").css("font-weight","normal");
        $("#topmenu>li").eq($menu_index).css("color","#2E038C");
        $("#topmenu>li").eq($menu_index).css("font-weight","bold");
    })
    $("body").on("mousewheel", function (event) { 
        console.log(event.originalEvent.wheelDelta);
        if(event.originalEvent.wheelDelta>0){
            $("html,body").stop().animate({
                "scrollTop":"0px"
            },700);
        }
        if(event.originalEvent.wheelDelta<0){
            $("html,body").stop().animate({
                "scrollTop":$s2_height+"px"
            },700);
        }
    });
    $("#analyze").click(function(){
        var $image_ok=$("#preview-image").attr("src");
        console.log($image_ok)
        if($image_ok==="upload_img.PNG"){
            alert("사진을 먼저 업로드 해주세요!")
        }
    });
});
