
AOS.init({
    duration: 800,
    easing: "slide",
});

(function ($) {
    "use strict";
    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: "scroll",

    });

    // Full height

    var fullHeight = function () {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(function () {
            $(".js-fullheight").css("height", $(window).height());
        });
    
    
    };

    fullHeight(); // call the function

    

    // navbar scroll

    var scrollWindow = function () {
        $(window).scroll( function () {
            var $w = $(this),
            st = $w.scrollTop(),
            navbar = $(".ftco_navbar"),
            sd = $(".js-scroll-wrap");

            if (st > 150) {
                if (!navbar.hasClass("scrolled")) {
                    navbar.addClass("scrolled")
                }
            }

            if (st < 150) {
                if (navbar.hasClass("scrolled")) {
                    navbar.removeClass("scrolled sleep");
                }
            }


            if (st > 350) {
                if(!navbar.hasClass("awake")) {
                    navbar.addClass("awake")
                }

                if (sd.length > 0) {
                    sd.addClass("sleep");
                }

            }


            if (st < 350) {

                if(navbar.hasClass("awake")) {
                    navbar.removeClass("awake");
                    navbar.addClass("sleep");
                }

                if(sd.length > 0) {
                    sd.removeClass("sleep");
                }


            }

            

        });
    };

    scrollWindow();

    $.Scrollax();


})(jQuery);