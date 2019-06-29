$(document).ready(function() {
	$('#next1').click(function(event) {
		var username = $('#username').val();
		var password = $('#password').val();
		var cf_password = $('#cf_password').val();
		var span = $('.span');
		if(username.length<=5){
			span[0].innerHTML = '&nbsp Tên phải lớn hơn 5 kí tự';
			$('#username').css('background','#FBE3E4');
		}
		else{
			span[0].innerHTML = '';
			$('#username').css('background','#FFF');
		}	
		if(password.length<=4){
			span[1].innerHTML  = '&nbsp Mật khẩu phải lớn hơn 4 kí tự';
			$('#password').css('background','#FBE3E4');
		}
		else{
			span[1].innerHTML = '';
			$('#password').css('background','#FFF');
		}		
		if(password!=cf_password){
			span[2].innerHTML  = '&nbsp Phải giống với mật khẩu';
			$('#cf_password').css('background','#FBE3E4');
		}
		else{
			span[2].innerHTML = '';
			$('#cf_password').css('background','#FFF');
		}	
		if(username<=5 || password<=4 || cf_password!=password){	
			$('#content1').css('display','block');
			$('#content2').css('display','none');
			$('#content3').css('display','none');
			$('#content4').css('display','none');
		}
		else{
			$('#content2').css('display','block');
			$('#content1').css('display','none');
			$('#content3').css('display','none');
			$('#content4').css('display','none');
			$('.active').css({
				background: '#EEEEEE',
				color: 'black'
			});
			$('.active2').css({
				background: '#2184BE',
				color: 'white'
			});
		}
	});

	$('#next2').click(function(event) {
		/* Act on the event */
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var firstname = $('#first_name').val();
		var lastname = $('#last_name').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var age = $('#age').val();
		var span = $('.span');
		if(firstname<1){
			span[3].innerHTML = '&nbsp Fisrt Name ko dc de trong';
			$('#first_name').css('background','#FBE3E4');
		}else{
			span[3].innerHTML = '';
			$('#first_name').css('background','#FFF');
		}if(lastname<1){
			span[4].innerHTML = '&nbsp Last Name ko dc de trong';
			$('#last_name').css('background','#FBE3E4');
		}else{
			span[4].innerHTML = '';
			$('#last_name').css('background','#FFF');
		}
		if(!re.test(email)){
			span[5].innerHTML = '&nbsp email không đúng định dạng';
			$('#email').css('background','#FBE3E4');
		}else{
			span[5].innerHTML = '';
			$('#email').css('background','#FFF');
		}
		if(address<=3){
			span[6].innerHTML = '&nbsp Địa chỉ quá ngắn';
			$('#address').css('background','#FBE3E4');
		}else{
			span[6].innerHTML = '';
			$('#address').css('background','#FFF');
		}
		if(age<1){
			span[7].innerHTML = '&nbsp Age không được để trống';
			$('#age').css('background','#FBE3E4');
		}else{
			span[7].innerHTML = '';
			$('#age').css('background','#FFF');
		}
		if(firstname<1 || lastname<1 || !re.test(email) || address<=3 || age<1) {	
			$('#content2').css('display','block');
			$('#content1').css('display','none');
			$('#content3').css('display','none');
			$('#content4').css('display','none');
		}
		else{
			$('#content3').css('display','block');
			$('#content1').css('display','none');
			$('#content2').css('display','none');
			$('#content4').css('display','none');
			$('.active2').css({
				background: '#EEEEEE',
				color: 'black'
			});
			$('.active3').css({
				background: '#2184BE',
				color: 'white'
			});
		}
	});

	$('#next2').click(function(event) {
		/* Act on the event */
			if(parseInt($('#age').val()) < 18){
				$('#content3-1').append('<h3>' + 'You are young - Please go away' + '</h3>');
				$('#next3').css('display','none');
			}else{
				$('#content3-1').append('<h3>' + 'Welcome you 18+' + '</h3>');
				$('#next3').css({
					display: 'block',
					float: 'right' ,	
				});
			}
	});
	$("#next3").click(function(event) {
		/* Act on the event */
		$('#content4').css('display','block');
		$('#content1').css('display','none');
		$('#content2').css('display','none');
		$('#content3').css('display','none');
		$('.active3').css({
				background: '#EEEEEE',
				color: 'black'
			});
			$('.active4').css({
				background: '#2184BE',
				color: 'white'
			});
	});
	$('#finish').click(function(event) {
		/* Act on the event */
			alert('Đăng ký thành công ');
	});

	$('#pre1').click(function(event) {
		/* Act on the event */
		$('#content1').css('display','block');
		$('#content2').css('display','none');
		$('#content3').css('display','none');
		$('#content4').css('display','none');
		$('.active2').css({
				background: '#EEEEEE',
				color: 'black'
			});
			$('.active').css({
				background: '#2184BE',
				color: 'white'
			});
	});

	$('#pre2').click(function(event) {
		/* Act on the event */
		$('#content2').css('display','block');
		$('#content1').css('display','none');
		$('#content3').css('display','none');
		$('#content4').css('display','none');
		$('.active3').css({
				background: '#EEEEEE',
				color: 'black'
			});
			$('.active2').css({
				background: '#2184BE',
				color: 'white'
			});
	});

	$('#pre3').click(function(event) {
		/* Act on the event */
		$('#content3').css('display','block');
		$('#content1').css('display','none');
		$('#content2').css('display','none');
		$('#content4').css('display','none');
		$('.active4').css({
				background: '#EEEEEE',
				color: 'black'
			});
			$('.active3').css({
				background: '#2184BE',
				color: 'white'
			});
	});


});