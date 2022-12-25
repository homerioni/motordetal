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



});