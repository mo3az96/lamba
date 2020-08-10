$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    ///////// **Main Slider** ///////// 
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
    });
    ///////// **products Slider** ///////// 
    $('.productsSlider').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        stagePadding: 20,
        margin: 30,
        dots: true,
        nav: true,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **search** /////////
    if ($(window).width() <= 991) {
        $(".search-ico").click(function () {
            $(".search-cont").fadeIn(400);
            $("body").addClass("overflow");
            $(".search-form").addClass("open");
        })
        $('.search-cont').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").fadeOut(500);
            $(".search-form").removeClass("open");
        });
        $('.search-form').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **menu** /////////
    if ($(window).width() <= 767) {
        $('.nav-xs .nav-a').click(function () {
            $(".sub-ul").slideToggle(300);
            $(this).toggleClass("active");
        });
        $('.menu-btn').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    $('.close-btn').click(function () {
        $(".hint").slideUp(300);
    })
});