// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const main_intro_slider = new Swiper('.intro__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    effect: "fade",

    navigation: {
        nextEl: '.intro .next',
        prevEl: '.intro .prev',
    },

    on: {
        beforeInit: function (slider) {
            slider.$el.parents('.intro').find('.slider-nav__progressbar span').css('width', (100 / slider.$el.find('.swiper-slide').length) + '%');
        },
        slideChange: function (slider) {
            let index = slider.realIndex + 1;
            $('.intro .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
            $('.intro .slider-nav__progressbar span').css('transform', 'translateX('+ (slider.realIndex * 100) +'%)');
        },
    },
});

const category_slider = new Swiper('.category-slider__slider', {
    direction: 'horizontal',
    slidesPerView: 1,

    breakpoints: {
        0: {
            spaceBetween: rem(1),
        },
        769: {
            spaceBetween: rem(3.4),
        },
    },

    navigation: {
        nextEl: '.category-slider .next',
        prevEl: '.category-slider .prev',
    },

    on: {
        slideChange: function (slider) {
            let index = slider.realIndex + 1;
            $('.category-slider .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
        },
    },
});

const advantages_slider = new Swiper('.advantages__slider', {
    direction: 'horizontal',
    spaceBetween: rem(3.4),

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: '.advantages .next',
        prevEl: '.advantages .prev',
    },

    on: {
        slideChange: function (slider) {
            let index = slider.activeIndex + 1;
            $('.advantages .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
        },
    },
});

const corp_slider = new Swiper('.corp__slider', {
    direction: 'horizontal',
    spaceBetween: rem(3.4),
    slidesPerView: 1,

    navigation: {
        nextEl: '.corp .next',
        prevEl: '.corp .prev',
    },
});