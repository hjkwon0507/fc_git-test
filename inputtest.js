$(function(){
    //로고이동
    $("#logo").click(function(){
        location.href="http://127.0.0.1:5500/inputtest.html";
    });

    //home 시작하기로 다음페이지 이동
    var $s2_height=$("#sec2").height();
    $("#start").click(function(){
        $("html,body").stop().animate({
            "scrollTop":$s2_height+"px"
        },700);
    })

    // 상단메뉴바 조정
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

    // 마우스 휠 조작
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

    // 분석하기
    $("#analyze").click(function(){
        var $image_ok=$("#preview_image").attr("src");
        console.log($image_ok)
        if($image_ok==="upload_img.PNG"){
            alert("사진을 먼저 업로드 해주세요!")
        }
    });
});
