document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper", {
        loop: true, // 讓輪播循環播放
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            576: {
                slidesPerView: 2.4,
            },
            992: {
                slidesPerView: 3.4,

            }

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 20, // 設定幻燈片之間的間距 (可依需求調整)
    });
});