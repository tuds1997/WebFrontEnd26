$(document).ready(function() {
	//ẩn form đăng ký
	//$('#form-dangky').animate({marginLeft: -300,opacity: 0});
	//chọn selector
	//sự kiện event
	//hiệu ứng xử lý
	$('#btn-dangky').click(function(event) {
		//$('#form-login').animate({marginLeft: -300,opacity: 0});
		//$('#form-dangky').animate({marginLeft: 300,opacity: 1});
		$('#form-login').addClass('hidden');
		$('#form-dangky').removeClass('hidden');
	});
	$('#btn-login2').click(function(event) {
		$('#form-dangky').addClass('hidden');
		$('#form-login').removeClass('hidden');
	});
});