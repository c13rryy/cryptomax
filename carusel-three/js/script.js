new Swiper('.all-swiper',{
    pagination: {
        el: '.swiper-pagination',
       /*  //булеты
        clickable: true,
        // динамические булеты
        dynamicBullets: true,
        //кастомные булеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }, */
        //фракция
        /* type: 'fraction', */
        // кастомный вывод фракции
        /* renderFraction: function (currentClass, totalClass) {
            return 'Photo <span class="' + currentClass + '"></span>' +
            ' iz ' +
            '<span class="' + totalClass + '"></span>';
        }, */
        /* //progrssbar
        type: 'progressbar' */
    },
    //vertical
    direction: 'vertical', 
    loop: true,
    slidesPerView: '1', 
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        //класс объекта на котором будет отрабатываться
        /* eventsTarget: ".image-slider" */
    },
    spaceBetween: 50,

});