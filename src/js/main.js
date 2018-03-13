(function($) {
	$(function() {
		var $button = $('#button');

		$('#nav-toggle').on('click', function(e) {
			e.preventDefault();
			this.classList.toggle('active');

			$('.nav-content').slideToggle();

			$('nav').toggleClass('active-bg', true);
			$('nav').toggleClass('unactive-bg', false);
		});

		$button.on('click', function(e) {
			e.preventDefault();
			$('html').animate(
				{
					scrollTop: 0,
				},
				2000
			);
		});

		$(window).on('scroll', function(e) {
			if ($(this).scrollTop() > 300) {
				$button.fadeIn();
			} else {
				$button.fadeOut();
			}
		});

		goTo('#more', '#services');
		goTo('.services', '#services');
		goTo('.portfolio', '#our-portfolio');
		goTo('.about', '#about-us');
		goTo('.contact', '#form-contact');
	});

	function goTo(elementClick, elementToGo) {
		$(elementClick).on('click', function(e) {
			e.preventDefault();
			$('html').animate(
				{
					scrollTop: $(elementToGo).offset().top,
				},
				1000
			);
		});
	}
})(jQuery);
