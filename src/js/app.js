import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
Swiper.use([Pagination, Autoplay, Navigation]);

/* TICKER */

$('.ticker__tickers').bxSlider({
		minSlides: 1,
		maxSlides: 10,
		slideWidth: "auto",
		slideMargin: 20,
		ticker: true,
		speed: 45000
});

/* links */

$(document).ready(function() {
    // Плавный спуск при нажатии на кнопку
    $('.anchor').on('click', function(event) {
        // Отменяем стандартное действие ссылки
        event.preventDefault();

        // Получаем целевую секцию
        var targetSection = $(this).attr('href');

        // Выполняем плавный спуск
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top
        }, 1000); // Время анимации в миллисекундах
    });
});


/* our */

const mainImg = document.querySelector(".our__img-main");
const secondImages = document.querySelectorAll(".our__image img");

secondImages.forEach(image => {
	image.addEventListener("click", function() {
		mainImg.src = this.src;
	})
})

/* select */
const colors = document.querySelectorAll(".select__color");
const colorCeil = document.querySelector(".select__color-ceil");

colors.forEach(color => {
	color.addEventListener("click", function() {
		colorCeil.style.background = this.dataset.color;
		this.style.boxShadow = `0px 0px 8px 10px ${this.dataset.color};`;
	})
})

const matteRadio = document.querySelector('input[value="matte"]');
const glossyRadio = document.querySelector('input[value="glossy"]');
const image = document.querySelector('.select__image');

matteRadio.addEventListener('change', function() {
    image.src = '../img/select/ceiling-matte.png';
});

glossyRadio.addEventListener('change', function() {
    image.src = '../img/select/ceiling-glossy.png';
});

/* types modal */

$(document).ready(function() {
    // При нажатии на .types__item открывается соответствующее модальное окно
    $('.types__item').click(function() {
        var popupId = $(this).attr('href');
        $(popupId).addClass('open-popup');
		$('body').css('overflow', 'hidden');
    });

    // При нажатии на .types__popup-close закрывается модальное окно
    $('.types__popup-close').click(function() {
        $(this).closest('.types__popup').removeClass('open-popup');
		$('body').css('overflow', '');
    });
});

/* sliders */

const mediaQuery = window.matchMedia('(max-width: 500px)');

if (mediaQuery.matches) {
	const swiper1 = document.querySelector(".swiper-1");
	const swiper11 = new Swiper(swiper1, {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 2500,
		},
		pagination: {
			el: '.types__pagination-1',
		  },
	});

	const swiper2 = document.querySelector(".swiper-2");
	const swiper22 = new Swiper(swiper2, {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 2800,
		},
		pagination: {
			el: '.types__pagination-2',
		  },
	});

	const swiper3 = document.querySelector(".swiper-3");
	const swiper33 = new Swiper(swiper3, {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 3100,
		},
		pagination: {
			el: '.types__pagination-3',
		  },
	});

	const swiper4 = document.querySelector(".swiper-4");
	const swiper44 = new Swiper(swiper4, {
		slidesPerView: 1,
		spaceBetween: 15,
		autoplay: {
			delay: 2500,
		},
		pagination: {
			el: '.our__pagination-4',
		  },
	});
}

/* promo */

$(document).ready(function(){
    const images = {
        promo1: ['../img/promo/promo-1-2.png', '../img/promo/promo-1-3.png', '../img/promo/promo-1-1.png'],
        promo2: ['../img/promo/promo-2-2.png', '../img/promo/promo-2-3.png', '../img/promo/promo-2-1.png'],
        promo3: ['../img/promo/promo-3-2.png', '../img/promo/promo-3-3.png', '../img/promo/promo-3-1.png']
    };

    let currentIndex = {
        promo1: 0,
        promo2: 0,
        promo3: 0
    };

    function changeImage(promo) {
        $('.promo__img.promo__img--' + promo).fadeOut('slow', function() {
            $(this).attr('src', images['promo' + promo][currentIndex['promo' + promo]]);
            $(this).fadeIn('slow');
        });
        currentIndex['promo' + promo] = (currentIndex['promo' + promo] + 1) % images['promo' + promo].length;
    }

    // Используем один общий интервал для всех промо-групп
	setTimeout(function() {
		changeImage('1');
	}, 0); // через 1 секунду после первой смены
	setTimeout(function() {
		changeImage('2');
	}, 2000); // через 1 секунду после первой смены
	setTimeout(function() {
		changeImage('3');
	}, 4000); // через 2 секунды после первой смены
    setInterval(function() {
        changeImage('1');
        setTimeout(function() {
            changeImage('2');
        }, 2000); // через 1 секунду после первой смены
        setTimeout(function() {
            changeImage('3');
        }, 4000); // через 2 секунды после первой смены
    }, 6000); // интервал общей смены всех изображений
});

/* slider */

const slider = document.querySelector('.after__slider');
const before = slider.querySelector('.after__slider-before');
const beforeImg = before.querySelector('img');
const change = slider.querySelector('.after__slider-change');

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImg.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

slider.addEventListener('mousedown', () => {
  isActive = true;
});
slider.addEventListener('mouseup', () => {
  isActive = false;
});
slider.addEventListener('mouseleave', () => {
  isActive = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }
  
  let x = e.pageX;
  
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

/* mobile */

slider.addEventListener('touchstart', () => {
  isActive = true;
});
slider.addEventListener('touchend', () => {
  isActive = false;
});
slider.addEventListener('touchcancel', () => {
  isActive = false;
});
slider.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }
  
  let x;
  for (let i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }
  
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

// Processing Form Submissions
$('.call__form').submit(function(e) {
	e.preventDefault();

	// Create a FormData object to pass form data
	let formData = new FormData(this);

	// Добавление дополнительных данные
	let name = $('.call__input-name').val();
	let phone = $('.call__input-tel').val();

	formData.append('name', name);
	formData.append('phone', phone);

	$.ajax({
		url: "send-email.php",
		method: 'POST',
		data: formData,
		contentType: false,
		processData: false,
		success: function(response) {
			name = $('.call__input-name').val("");
			phone = $('.call__input-tel').val("");
			$(".call__response").text("Ваша заявка отправлена. Мы с Вами свяжемся в самое ближайшее время.")
			$(".call__response").removeClass("call__response--error")
			$(".call__response").addClass("call__response--success")
		},
		error: function(error) {
			console.error('Error:', error);
			$(".call__response").text("Что-то пошло не так. Попробуйте позже.")
			$(".call__response").removeClass("call__response--success")
			$(".call__response").addClass("call__response--error")
		}
	});
});