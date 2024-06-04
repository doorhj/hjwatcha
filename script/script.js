$(function() {
    $(document).ready(function() {
        $("#wrapper").smoothWheel();
    });

    // 메뉴 마우스 오버
    $(".main li").mouseover(function() {
        $(".sub", this).stop().slideDown(400);
        $(".bg").stop().slideDown(400);
    }).mouseout(function() {
        $(".sub", this).stop().slideUp(400);
        $(".bg").stop().slideUp(400);
    });

    // 비디오 콘텐츠 불투명도 스크롤 애니메이션
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var VconStart = 300;
        var VconEnd = 800;

        var opacity = 1;
        if (scrollTop >= VconStart) {
            if (scrollTop <= VconEnd) {
                opacity = 1 - (scrollTop - VconStart) / (VconEnd - VconStart);
            } else {
                opacity = 0;
            }
        }
        $('.video_con').css('opacity', opacity);
    });

    // 그라데이션
    $(".gra").hide();
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var GraStart = 200;
        var GraEnd = 700;
        var maxOpacity = 1;

        if (scrollTop >= GraStart && scrollTop <= GraEnd) {
            $(".gra").show();
            var opacity = maxOpacity * (scrollTop - GraStart) / (GraEnd - GraStart);
            $(".gra").css("background-color", "rgba(1, 0, 3, " + opacity + ")");
        } else if (scrollTop < GraStart) {
            $(".gra").css("background-color", "rgba(1, 0, 3, 0)");
        } else if (scrollTop > GraEnd) {
            $(".gra").css("background-color", "rgba(1, 0, 3, " + maxOpacity + ")");
        }
    });

    // con1 페이드인-아웃 스크롤 애니메이션
    $(window).on('scroll', function() {
        $('.con1 p').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            console.log('Element:', this, 'Element Top:', elementTop, 'Element Bottom:', elementBottom, 'Viewport Top:', viewportTop, 'Viewport Bottom:', viewportBottom);

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).css('opacity', 1);
            } else {
                $(this).css('opacity', 0);
            }
        });
    });

    // wrap_con2 페이드인-아웃 스크롤 애니메이션
    $(window).on('scroll', function() {
        $('.wrap_con2').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            console.log('Element:', this, 'Element Top:', elementTop, 'Element Bottom:', elementBottom, 'Viewport Top:', viewportTop, 'Viewport Bottom:', viewportBottom);

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).css('opacity', 1);
            } else {
                $(this).css('opacity', 0);
            }
        });
    });

    // 초기 스크롤 상태에서 페이드인/아웃 상태 설정
    $(window).trigger('scroll');

    // 요금제 active 옮기기
    $(".con2>div").click(function() {
        var idx = $(this).index();

        $(".con2>div").removeClass("active");
        $(".con2>div").eq(idx).addClass("active");

        // 요소 클릭시 선택 버튼 자동 색바꿈
        $(".btn_con2").css("background-color", "#FF0558");
        $(".btn_con2>p").css("color", "#f2f2f2");
    });

    // con2 div 요소를 클릭해서 버튼 색이 바뀌었을 때 마우스오버 이벤트
    $(".btn_con2").mouseover(function() {
        var currentBgColor = $(this).css("background-color");

        // 현재 배경색이 #FF0558일 때만 변경
        if (currentBgColor === "rgb(255, 5, 88)") { // #FF0558의 rgb 값
            $(this).css("background-color", "#ff3d6e");
        }
    }).mouseout(function() {
        var currentBgColor = $(this).css("background-color");

        // 배경색이 #F2F2F2일 때 원래 상태로 변경
        if (currentBgColor === "rgb(255, 61, 110)") {
            $(this).css("background-color", "#FF0558");
        }
    });

    // 이미지 슬라이드
    var $smain = $('.smain');
    var $slidesMain = $('.smain li');
    var $sub2 = $('.sub2');
    var $slidesSub2 = $('.sub2 li');
    var $sub3 = $('.sub3');
    var $slidesSub3 = $('.sub3 li');

    $slidesMain.clone().appendTo($smain);
    $slidesSub2.clone().appendTo($sub2);
    $slidesSub3.clone().appendTo($sub3);

    // smain 마우스오버
    $('.smain img').on('mouseover', function() {
        $smain.css('animation-play-state', 'paused');
        $(this).addClass('enlarged');
    }).on('mouseout', function() {
        $smain.css('animation-play-state', 'running');
        $(this).removeClass('enlarged');
    });

    // sub2 마우스오버
    $('.sub2 img').on('mouseover', function() {
        $sub2.css('animation-play-state', 'paused');
        $(this).addClass('enlarged');
    }).on('mouseout', function() {
        $sub2.css('animation-play-state', 'running');
        $(this).removeClass('enlarged');
    });

    // sub3 마우스오버
    $('.sub3 img').on('mouseover', function() {
        $sub3.css('animation-play-state', 'paused');
        $(this).addClass('enlarged');
    }).on('mouseout', function() {
        $sub3.css('animation-play-state', 'running');
        $(this).removeClass('enlarged');
    });
});