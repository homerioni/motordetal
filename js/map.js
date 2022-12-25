ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [57.738384, 40.846612],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Профмед'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.svg',
            // Размеры метки.
            iconImageSize: [rem(9.8), rem(12)],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [rem(-4.9), rem(-11.4)]
        });

    myMap.geoObjects.add(myPlacemark);
});