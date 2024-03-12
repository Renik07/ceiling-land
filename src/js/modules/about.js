// import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
// Swiper.use([Pagination, Autoplay, Navigation]);

// export function aboutBxSlider() {
//     $('.bxslider').bxSlider({
//         minSlides: 1,
//         maxSlides: 10,
//         slideWidth: "auto",
//         slideMargin: 0,
//         ticker: true,
//         speed: 15000
//     });
//     $('.bxslider2').bxSlider({
//         minSlides: 1,
//         maxSlides: 10,
//         slideWidth: "auto",
//         autoDirection: 'prev',
//         slideMargin: 0,
//         ticker: true,
//         speed: 15000
//     });
// }

// export function aboutScrollLinks() {
//     $('a[href^="#"]').on('click', function(e) {
//         e.preventDefault();
//         let target = this.hash;
//         let $target = $(target);
//         scrollToTarget($target);
//         return false; // Предотвращаем стандартное действие и остановку всплытия события
//     });

//     $('.aboutpage__head').on('click', function(e) {
//         e.preventDefault();
//         let $target = $(this).closest('.aboutpage__block');
//         scrollToTarget($target);
//         return false; // Предотвращаем стандартное действие и остановку всплытия события
//     });

//     function scrollToTarget($target) {
//         if ($target.length) { // Проверяем, существует ли целевой элемент
//             $('html, body').stop().animate({
//                 'scrollTop': $target.offset().top
//             }, 900, 'swing');
//         } else {
//             console.error('Target element not found');
//         }
//     }
// }

// export function aboutSlider() {
//     const aboutSwiper = document.querySelector(".aboutpage-slider");
//     const swiper = new Swiper(aboutSwiper, {
//         slidesPerView: 1,
//         spaceBetween: 70,
//         navigation: {
//             nextEl: '.aboutpage__nav-next',
//             prevEl: '.aboutpage__nav-prev',
//           },
//         pagination: {
//             el: ".aboutpage__pagination",
//             clickable: true,
//             renderBullet: function (index, className) {
//                 return '<span class="' + className + '">' + (index + 1) + "</span>";
//             },
//         },
//     });
// }