

new Swiper('.intro-slider', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    speed: 800,
});

new Swiper('.series-slider',{
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    slidesPerView: 3,
    slidesPerGroup: 1,
    // watchOverflow: true,
    // slidesPerGroup: 1,
    // centeredSlides: true,
    // mousewheel: {
    //   sensitivity: 1,
    //   event: '.image-slider'
    // },
});

