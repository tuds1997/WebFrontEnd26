$(document).ready(function() {
	$('.noidung2').slideUp();
	$('.khoi button').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).next().slideToggle();
		$('#i1').removeClass('fa fa-plus-circle');
		$('#i1').addClass('fa fa-minus-circle');
	});
});