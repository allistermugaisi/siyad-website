const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
	btn.classList.toggle('open');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
});

// WhatsApp Javascript
/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on('click', '#send-it', function () {
	var a = document.getElementById('chat-input');
	if ('' != a.value) {
		var b = $('#get-number').text(),
			c = document.getElementById('chat-input').value,
			d = 'https://web.whatsapp.com/send',
			e = b,
			f = '&text=' + c;
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		)
			var d = 'whatsapp://send';
		var g = d + '?phone=+1 (612) 281-6866' + e + f;
		window.open(g, '_blank');
	}
}),
	$(document).on('click', '.informasi', function () {
		(document.getElementById('get-number').innerHTML = $(this)
			.children('.my-number')
			.text()),
			$('.start-chat,.get-new').addClass('show').removeClass('hide'),
			$('.home-chat,.head-home').addClass('hide').removeClass('show'),
			(document.getElementById('get-nama').innerHTML = $(this)
				.children('.info-chat')
				.children('.chat-nama')
				.text()),
			(document.getElementById('get-label').innerHTML = $(this)
				.children('.info-chat')
				.children('.chat-label')
				.text());
	}),
	$(document).on('click', '.close-chat', function () {
		$('#whatsapp-chat').addClass('hide').removeClass('show');
	}),
	$(document).on('click', '.blantershow-chat', function () {
		$('#whatsapp-chat').addClass('show').removeClass('hide');
	});

// HERO SLIDER
// var menu = [];
// jQuery('.swiper-slide').each(function (index) {
// 	menu.push(jQuery(this).find('.slide-inner').attr('data-text'));
// });
// var interleaveOffset = 0.5;
// var swiperOptions = {
// 	loop: true,
// 	speed: 1000,
// 	parallax: true,
// 	autoplay: {
// 		delay: 6500,
// 		disableOnInteraction: false,
// 	},
// 	watchSlidesProgress: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},

// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	on: {
// 		progress: function () {
// 			var swiper = this;
// 			for (var i = 0; i < swiper.slides.length; i++) {
// 				var slideProgress = swiper.slides[i].progress;
// 				var innerOffset = swiper.width * interleaveOffset;
// 				var innerTranslate = slideProgress * innerOffset;
// 				swiper.slides[i].querySelector('.slide-inner').style.transform =
// 					'translate3d(' + innerTranslate + 'px, 0, 0)';
// 			}
// 		},

// 		touchStart: function () {
// 			var swiper = this;
// 			for (var i = 0; i < swiper.slides.length; i++) {
// 				swiper.slides[i].style.transition = '';
// 			}
// 		},

// 		setTransition: function (speed) {
// 			var swiper = this;
// 			for (var i = 0; i < swiper.slides.length; i++) {
// 				swiper.slides[i].style.transition = speed + 'ms';
// 				swiper.slides[i].querySelector('.slide-inner').style.transition =
// 					speed + 'ms';
// 			}
// 		},
// 	},
// };

// var swiper = new Swiper('.swiper-container', swiperOptions);

// // DATA BACKGROUND IMAGE
// var sliderBgSetting = $('.slide-bg-image');
// sliderBgSetting.each(function (indx) {
// 	if ($(this).attr('data-background')) {
// 		$(this).css('background-image', 'url(' + $(this).data('background') + ')');
// 	}
// });
