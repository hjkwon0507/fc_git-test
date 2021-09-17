$(function(){
    // fullpage 화면에 꽉차게
	var ht = $(window).height();	
	$("section").height(ht);
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	

    // home 시작하기, guide 만들기 로 다음페이지 이동
    var $s2_height=$("#sec2").height();
    $("#start").click(function(){
        $("html,body").stop().animate({
            "scrollTop":$s2_height+"px"
        },700);
    });
    $("#make").click(function(){
        $("html,body").stop().animate({
            "scrollTop":($s2_height*2)+"px"
        },700);
    });
    // // 상단메뉴바 조정
    // $("#top_menu>li").click(function(){
    //     var $menu_index=$(this).index()
    //     $("html,body").stop().animate({
    //         "scrollTop":($s2_height*$menu_index)+"px"
    //     },700);
    //     $("#top_menu>li>a").css("color","#333");
    //     $("#top_menu>li>a").css("font-weight","normal");
    //     $("#top_menu>li>a").eq($menu_index).css("color","#2E038C");
    //     $("#top_menu>li>a").eq($menu_index).css("font-weight","bold");
    // })

    // 상단메뉴 버튼 클릭시 
	$("#top_menu li").on("click",function(e){
		e.preventDefault();
		var ht = $(window).height();
		var i = $(this).index();  
		var nowTop = i*ht;			
	
		$("html,body").stop().animate({"scrollTop":nowTop},1000);
	});

    // 상단메뉴 스크롤 스파이
    $(window).on("scroll",function(){	
		var ht = $(window).height(); 
		var scroll = $(window).scrollTop();

		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#top_menu li").removeClass();
				$("#top_menu li").eq(i).addClass("on");
			};
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
// 마우스 휠 조작
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});
$(function(){
    var $html = $("html");
    var page = 1;
    var $lastPage = $(".sec").length;//마지막 페이지번호

    $(window).on('wheel',function(e){
        if($html.is(":animated")) return;
        //scroll down
        if(e.originalEvent.deltaY > 0){
            if(page == $lastPage) return;
            page++;
        }
        //scroll up
        else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
            page--;
        }
        var postop = (page-1) * $(window).height();
        $html.animate({scrollTop : postop});
    });

});