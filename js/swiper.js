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
    loop: true,
    loopAdditionalSlides: 10,
    // slideToClickedSlide: true,

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

$('.video__slider').each(function () {
    new Swiper({
        el: $(this)[0],
        direction: 'horizontal',

        grid: {
            fill: 'row',
            rows: 2,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: rem(2),
            },
            769: {
                slidesPerView: 2,
                spaceBetween: rem(3.2),
            },
        },

        navigation: {
            nextEl: $(this).parents('.tabs__tab-content').find('.video__slider-nav .next')[0],
            prevEl: $(this).parents('.tabs__tab-content').find('.video__slider-nav .prev')[0],
        },

        on: {
            slideChange: function (slider) {
                let index = slider.activeIndex + 1,
                    number = index < 10 ? '0' + index : index;
                slider.$el.parents('.tabs__tab-content').find('.slider-nav__number').html(number);
            },
        },
    });
});

const docs_slider = new Swiper('.docs__slider', {
    direction: 'horizontal',

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: rem(1.5),
        },
        769: {
            slidesPerView: 4,
            spaceBetween: rem(3.2),
        },
    },

    navigation: {
        nextEl: '.docs__slider-nav .next',
        prevEl: '.docs__slider-nav .prev',
    },

    on: {
        slideChange: function (slider) {
            let index = slider.activeIndex + 1;
            $('.docs__slider-nav .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
        },
    },
});

const news_potral_slider = new Swiper('.news-portal', {
    direction: 'horizontal',

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: rem(2),

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        769: {
            slidesPerView: 2,
            spaceBetween: rem(3.2),
        },
    },

    navigation: {
        nextEl: '.news-portal__slider-nav .next',
        prevEl: '.news-portal__slider-nav .prev',
    },

    on: {
        slideChange: function (slider) {
            let index = slider.activeIndex + 1;
            $('.news-portal__slider-nav .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
        },
    },
});

const photo_tab_slider = new Swiper('.photo-tab', {
    direction: 'horizontal',

    grid: {
        fill: 'row',
        rows: 2,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: rem(2),
        },
        769: {
            slidesPerView: 2,
            spaceBetween: rem(3.2),
        },
    },

    navigation: {
        nextEl: '.photo-tab__slider-nav .next',
        prevEl: '.photo-tab__slider-nav .prev',
    },

    on: {
        slideChange: function (slider) {
            let index = slider.activeIndex + 1;
            $('.photo-tab__slider-nav .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
        },
    },
});

const contacts_b_slider = new Swiper('.contacts-b__slider', {
    direction: 'horizontal',
    spaceBetween: rem(3.2),

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2,
        },
    },

    navigation: {
        nextEl: '.contacts-b__slider-nav .next',
        prevEl: '.contacts-b__slider-nav .prev',
    },

    on: {
        slideChange: function (slider) {
            let index = slider.activeIndex + 1;
            $('.contacts-b__slider-nav .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
        },
    },
});

const catalog_slider = new Swiper('.catalog-slider__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: rem(1.5),
        },
        769: {
            slidesPerView: 4,
            spaceBetween: rem(3.4),
        },
    },

    navigation: {
        nextEl: '.catalog-slider__slider-nav .next',
        prevEl: '.catalog-slider__slider-nav .prev',
    },

    on: {
        slideChange: function (slider) {
            let index = slider.realIndex + 1;
            $('.catalog-slider__slider-nav .slider-nav__number').html(function () {
                return index < 10 ? '0' + index : index;
            });
        },
    },
});

const product_image_thumb_slider = new Swiper('.product__image-slider-thumb', {
    direction: 'vertical',
    slidesPerView: 2,
    loop: true,
    spaceBetween: rem(3.2),
});

const product_image_slider = new Swiper('.product__image-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spaceBetween: rem(3.2),

    navigation: {
        nextEl: '.product__image-slider-next',
        prevEl: '.product__image-slider-prev',
    },

    pagination: {
        el: '.product__image-slider-pagination',
        type: 'bullets',
    },

    on: {
        slideChange: function (slider) {
            product_image_thumb_slider.slideToLoop(slider.realIndex + 1);
        },
    },
});

$('.product__image-slide-thumb').click(function () {
    product_image_slider.slideToLoop($(this).data('swiper-slide-main'));
});

const article_number_slider = new Swiper('.article-number__slider', {
    direction: 'horizontal',
    spaceBetween: rem(3.2),

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2.3,
        },
    },

    navigation: {
        nextEl: '.article-number__slider-nav .next',
        prevEl: '.article-number__slider-nav .prev',
    },
});