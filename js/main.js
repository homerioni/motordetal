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


});