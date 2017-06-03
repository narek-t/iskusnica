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
	$('.filter__checkbox input').on('change', function(event) {
		if(this.checked) {
			$(this).parents('.filter__checkbox').addClass('active');
		}else {
			$(this).parents('.filter__checkbox').removeClass('active');
		}
		var subFilter = $(this).parents('.filter__checkbox').next('.sub-filter');
		if(subFilter.length && this.checked) {
			subFilter.find('input').prop('checked', true);
			subFilter.find('.filter__checkbox').addClass('active')
		}else if(subFilter.length && !this.checked) {
			subFilter.find('input').prop('checked', false);
			subFilter.find('.filter__checkbox').removeClass('active')
		}
	});
	$('.filter__title-wrapper').click(function(event) {
		$(this).toggleClass('hidden');
		$(this).next('.filter__checkboxes').toggleClass('hidden');
	});
});