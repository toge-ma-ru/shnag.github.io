$(function() {

	$('#return-top').click(() => {
		$('html').animate({scrollTop: 0})
	});
	
	$(window).scroll(() => {
		if($(this).scrollTop() > 0) {
			$('#return-top').fadeIn();
		} else {
			$('#return-top').fadeOut();
		}
	});
});