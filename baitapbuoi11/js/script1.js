$(document).ready(function() {
	$('button').click(function(event) {
		/* Act on the event */
		var newList = $('#addtolist').val();
		if(newList.length>0){
			$('#todolist').append('<li>' + newList +  '<i class="fa fa-times-circle x" aria-hidden="true">' + '</i>' +'</li>');
			$('.x').click(function(event) {
				/* Act on the event */
				$(this).parent().remove();
			});
		}else{
			alert('không được để trống');
		}
	});
});