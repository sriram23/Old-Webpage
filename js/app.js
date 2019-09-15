//testimonial slider
var testimonialSwiper = new Swiper('.swiper-container.testimonials-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 2, // slides Per View
    paginationClickable: true,
    nested: true,
    spaceBetween: 30, // slides space between
    breakpoints: {
        // when window width is <= 900px
        900: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

$(".button-collapse").sideNav();
$(".tabs").tabs({});

// portfolio tab setting
$(".portfolio-content").hide();
$(".portfolio-content:first").show();

$(".portfolio  ul.tabs li.tab").on("click", function () {
    var index = $(this).index();
    $(".portfolio-content").slideUp();
    $(".portfolio-content:eq(" + index + ")").slideDown();
});

$('ul.tabs').tabs();
$('.materialboxed').materialbox();

$("ul.menu li a").first().addClass("bg-color white-text");
$("ul.menu li a").on("click", function () {
    $("ul.menu li a").removeClass("bg-color white-text");
    $(this).addClass("bg-color white-text");
    $(".button-collapse").sideNav("hide");
});


$(document).on("scroll", onScroll);


//smooth scroll
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("bg-color white-text");
            currLink.addClass("bg-color white-text");
        }
    });
}

//Menu Settings
var mq = window.matchMedia("(max-width: 993px)");
if (mq.matches) {
    $('.menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.menu a').each(function () {
            $(this).removeClass('bg-color white-text');
        })
        $(this).addClass('bg-color white-text');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + -24
        }, 500, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
} else {
    $('.menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.menu a').each(function () {
            $(this).removeClass('bg-color white-text');
        })
        $(this).addClass('bg-color white-text');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + -30
        }, 500, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
}
$(window).resize(function () {
    if (mq.matches) {
        $('.menu a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('.menu a').each(function () {
                $(this).removeClass('bg-color white-text');
            })
            $(this).addClass('bg-color white-text');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + -24
            }, 500, function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    } else {
        $('.menu a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('.menu a').each(function () {
                $(this).removeClass('bg-color white-text');
            })
            $(this).addClass('bg-color white-text');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + -30
            }, 500, function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    }
});
//Menu Settings End