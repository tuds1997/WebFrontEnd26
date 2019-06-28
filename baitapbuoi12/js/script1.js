$(document).ready(function() {
	$('#content1 button').click(function(event) {
		/* Act on the event */
		$('#content2').css('display','block');
		$('#content1').css('display','none');
		$('#content3').css('display','none');
		$('#content4').css('display','none');
	});

	$('#content2 button').click(function(event) {
		/* Act on the event */
		$('#content3').css('display','block');
		$('#content1').css('display','none');
		$('#content2').css('display','none');
		$('#content4').css('display','none');
	});

	$('#content3 button').click(function(event) {
		/* Act on the event */
		$('#content4').css('display','block');
		$('#content1').css('display','none');
		$('#content2').css('display','none');
		$('#content3').css('display','none');
	});

	$('#content4 button').click(function(event) {
		/* Act on the event */
		alert('Đăng ký thành công ');
	});
});