'use strict'

$(document).ready(function () {

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


});