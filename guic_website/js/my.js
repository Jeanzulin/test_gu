$(document).ready(function () {

    //AOS
    $(function () {
        AOS.init();
    })


    //tab
    $(".uk-tab li").on("click", function () {
        $(".slider").slick('refresh');
    });

    //m版漢堡選單
    $('#toggle').click(function (e) {
        $('.main-nav, nav.main-nav, #toggle, #header').toggleClass('on');
        e.preventDefault();
    });
    $('.main-nav ul.anchor li a').click(function () {
        $('#header,#toggle, .main-nav').removeClass('on')
    })
    //錨點捲動
    $('a[href*="#sec_"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    })

    //一按鈕觸發另一按鈕
    $('#anchor-qa3').on('click', function () {
        $('#qa3').click();
    })


    //gotop        
    var float_btn = $('.float_btn');
    var gotop = $('#gotop');
    gotop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            float_btn.fadeIn();
        } else {
            float_btn.stop().fadeOut();
        }
    });
    if ($(window).width() < 769) {

        $(window).scroll(function () {
            //最後一頁scrollTop=body-window，50是預留空間
            last = $("body").height() - $(window).height() - 200
            if ($(window).scrollTop() >= last) {
                $(".float_action_group").hide()
            }
            else {
                $(".float_action_group").show()
            }

        })
    }


    //slick
    $(".slider").slick({
        autoplaySpeed: 1500,
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        // centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

    });



})