$(function() {

	$('a[href^="#"]').click(function(){
	    var adjust = -40;
	    var speed = 400;
	    var href= $(this).attr("href");
	    var target = $(href == "#" || href == "" ? 'html' : href);
	    var position = target.offset().top + adjust;
	    $('body,html').animate({scrollTop:position}, speed, 'swing');
	    return false;
	  });

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