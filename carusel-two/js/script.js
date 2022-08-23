new Swiper('.mygg',{
     //стрелки
     navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'

    },
    slidesPerView: '4',
    loop: true,
    spaceBetween: 30,   
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        //возможность пертаскивать скрол
        draggable: true
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },

        1300: {
            slidesPerView: 4,
        }
    },

});

