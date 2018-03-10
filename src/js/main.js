(function($) {
	$(function() {
		$('#nav-toggle').on('click', function(e) {
			e.preventDefault();
			this.classList.toggle('active');

			$('.nav-menu-content').slideToggle();
		});
	});
})(jQuery);
