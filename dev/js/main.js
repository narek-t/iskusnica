$(document).ready(function() {
	$('.home-slider__wrapper').slick({
		arrows: false,
		dots: true,
	});
	$('.open-popup').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});