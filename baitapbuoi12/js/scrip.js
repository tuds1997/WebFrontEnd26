$(document).ready(function() {
	$('.b1 img').click(function(event) {
		/* Act on the event */
		var $src = $(this).attr('src');
		$('.show').fadeIn(400);
		$('.show-img img').attr('src',$src);
	});
	$('.bgshow ,.show-img i').click(function(event) {
		/* Act on the event */
		$('.show').fadeOut(400);
	});
});