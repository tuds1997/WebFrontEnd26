$(document).ready(function() {
	$('button').click(function(event) {
		/* Act on the event */
		$('h1').animate({
			marginLeft: 500},400);
	}); //end click button
});