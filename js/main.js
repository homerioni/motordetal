'use strict'

$(document).ready(function () {

    // Masked input
    $('.mask-phone').length ? $('.mask-phone').mask('+ 7 (999) 999-99-99') : false;

    // Header
    if ($(window).width() <= 768) {
        $('.header__content.desktop').css('display', 'flex').hide();
    }
    // Header burger
    $('.header__burger-btn').click(function () {
        $(this).toggleClass('active');
        $('.header__content.desktop').slideToggle();
        $('body').toggleClass('lock');
    });
    // Header lists
    $('.header__menu-item-name').click(function () {
        if ($(window).width() <= 768) {
            if ($(this).hasClass('active')) {
                $('.header__menu-item-name').removeClass('active');
                $('.header__menu-list').slideUp();
            } else {
                $('.header__menu-item-name').removeClass('active');
                $('.header__menu-list').slideUp();
                $(this).addClass('active').parent().find('.header__menu-list').css('display', 'flex').hide().slideDown();
            }
        }
    });
    // Header language list
    $('.header__lang-btn').click(function () {
        if ($(window).width() <= 768) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').parent().find('.header__lang-list').slideUp();
            } else {
                $(this).addClass('active').parent().find('.header__lang-list').css('display', 'flex').hide().slideDown();
            }
        }
    });

    // Forms
    $('.form-list').length ? $('.form-list').css('display', 'flex').hide() : false;
    $('.select-label').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find('.form-list').slideUp();
        } else {
            $('.select-label.active').removeClass('active').find('.form-list').slideUp();
            $(this).addClass('active').find('.form-list').slideDown();
        }
    });
    $('.validator__list-item').click(function (e) {
        e.stopPropagation();
    });
    $('.form-list input').change(function () {
        $(this).parents('.form-list').find('.form-list-item').removeClass('active');
        $(this).parents('.form-list-item').addClass('active')
            .parents('.select-label').children('input').attr('value', $(this).siblings('span').html());
        $(this).parents('.form-list').slideUp();
    });
    $('.validator__label input, .form__label input, .form__label textarea').focusin(function () {
        $(this).parent().addClass('focus');
    }).focusout(function () {
        $(this).parent().removeClass('focus');
    });

    // Video
    $('.video__item a').each(function () {
        let getLink = $(this).attr('href')
            .replace('.com/embed/', '.com/watch?v=')
            .replace('.be/', '.com/watch?v=')
            .split(".com/watch?v=")[1]
            .split("&index")[0]
            .replace('&', '?');
        $(this).find('iframe').attr('src', 'https://www.youtube.com/embed/' + getLink);
    });
    $('[data-fancybox="video"]').fancybox({
        arrows: false,
        infobar: false,
        toolbar: false,
        smallBtn: true,
        afterLoad: function(instance, current) {
            if ($(window).width() <= 768) {
                current.width  = rem(33.5);
                current.height = rem(19);
            } else {
                current.width  = rem(142.6);
                current.height = rem(80.6);
            }
        },
        afterShow: function (inst, current) {
            current.$smallBtn.addClass('video-close')
                .html('<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M25.5 0H33L7.5 33H0L25.5 0Z" fill="#D62214"/>\n' +
                '<path d="M7.5 0H0L25.5 33H33L7.5 0Z" fill="#D62214"/>\n' +
                '</svg>\n');
        },
    });

    // Tabs
    $('.tabs__tab').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).siblings('.tabs__tab.active').removeClass('active');
            $(this).addClass('active');
        }
    });
    $('.tabs__tab-input').change(function () {
        $(this).parent().siblings('.tabs__tab-content.active').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Catalog
    $('.catalog__category-list').length ? $('.catalog__category-list').css('display', 'flex').hide() : false;
    $('.catalog__category-btn').click(function () {
        if ($(window).width() <= 768) {
            $('.header, .breadcrumbs').addClass('bottom-slide');
            $('body').addClass('lock');
            $(this).addClass('active').siblings('.catalog__category-list').addClass('active');
        } else {
            $(this).toggleClass('active').siblings('.catalog__category-list').slideToggle();
        }
    });
    $('.catalog__category-item input').change(function () {
        $('.catalog__category-item.active').removeClass('active');
        $(this).parents('.catalog__category-item').addClass('active');
    });
    $('.filter__checkbox-label input').change(function () {
        $(this).parent().toggleClass('active');
    });
    $('.catalog__search-label input, .filter__item-search input, .docs__search-label input, .career__search-label input')
        .focusin(function () {
            $(this).parent().addClass('focus');
        }).focusout(function () {
            $(this).parent().removeClass('focus');
    });
    $('.catalog-list-btn').click(function () {
        $('.catalog__view-btn').removeClass('active');
        $(this).addClass('active');
        $('.catalog__list').addClass('catalog__list--lists');
    });
    $('.catalog-gallery-btn').click(function () {
        $('.catalog__view-btn').removeClass('active');
        $(this).addClass('active');
        $('.catalog__list').removeClass('catalog__list--lists');
    });
    $('.catalog__filter-btn').click(function () {
        $('.header, .breadcrumbs').addClass('bottom-slide');
        $('body').addClass('lock');
        $('.filter').addClass('active');
    });
    $('.filter__item-btn').click(function () {
        $(this).toggleClass('active').siblings('.filter__item-content').slideToggle();
    });
    $('.filter__close').click(function () {
        setTimeout(function () {
            $('.header, .breadcrumbs').removeClass('bottom-slide');
        }, 500);
        $('body').removeClass('lock');
        $('.filter').removeClass('active');
    });
    $('.catalog__category-close').click(function () {
        setTimeout(function () {
            $('.header, .breadcrumbs').removeClass('bottom-slide');
        }, 500);
        $('body').removeClass('lock');
        $(this).parent().removeClass('active').siblings('.catalog__category-btn').removeClass('active');
    });

    // Modal buy
    $('[href="#modal-buy"]').fancybox({
        smallBtn: false,
        arrows: false,
        infobar: false,
        toolbar: false,
            baseTpl:
                '<div class="fancybox-container" role="dialog" tabindex=" -1">' +
                '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-inner">'+
                '<div class="fancybox-infobar"><span data-fancybox-index></span> / <span data-fancybox-count></span></div>' +
                '<div class="fancybox-toolbar">{{кнопки}}</div>' +
                '<div class="fancybox-navigation">{{стрелки}}</div>' +
                '<div class="fancybox-stage modal-buy__stage"></div>' +
                '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
                '</div>',
    });


    // Career
    $('.career__text-btn').click(function () {
        $(this).toggleClass('active').siblings('.career__text-content').toggleClass('active');
    });

});