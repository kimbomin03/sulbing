$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        parallax: true,
        speed: 200,
        autoplay: true,
        autoplaySpeed: 6000,
    })

    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });


    const main_customer_slide = new Swiper('.main_customer_slide', {
        loop: true,
        slidesPerView: 3.2,
        spaceBetween: 30,


    });

    const MSS = new Swiper('.main_sns_slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 8,
        centeredSlides: true,
        autoplay: {


        },


    });

});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }
    })
})



$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});

$(function () {
    $('to_top #lnk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
});