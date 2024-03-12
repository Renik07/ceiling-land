// import Swiper, { Pagination, Autoplay } from "swiper";
// Swiper.use([Pagination, Autoplay]);

// export function homePromoSlider() {
//     const promoSwiper = document.querySelector(".promo-swiper");
//     const swiper = new Swiper(promoSwiper, {
//         slidesPerView: 1,
//         loop: true,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: ".promo__pagination",
//         },
//         breakpoints: {
//             200: {
//                 direction: "vertical"
//             },
//             500: {
//                 direction: "horizontal"
//             },
//         }
//     });
// };

// export function homeNewsSlider() {
//     if (window.matchMedia("(max-width: 500px)").matches) {
//         const homeNewsSwiper = document.querySelector(".home-sl .news-swiper");
//         const swiper2 = new Swiper(homeNewsSwiper, {
//             slidesPerView: 1,
//             spaceBetween: 20,
//             pagination: {
//                 el: ".home-sl .news__pagination",
//             },
//         });
//     }
// }

// export function homeScrollButton() {
//     $('.promo__icon').on('click', function(e) {
//         $('html, body').stop().animate({
//             'scrollTop': $('.who').offset().top
//         }, 900, 'swing');
//     });
// }

// export function articleNewsSlider() {
//     if (window.matchMedia("(max-width: 500px)").matches) {
//         const articleNewsSwiper = document.querySelector(".article-sl .news-swiper");
//         const swiper33 = new Swiper(articleNewsSwiper, {
//             slidesPerView: 1,
//             spaceBetween: 20,
//             pagination: {
//                 el: ".article-sl .news__pagination",
//             },
//         });
//     }
// }