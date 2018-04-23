$(function(){
	$('#btn').on('click', function(){
		$('.zoom').show();
		$('.btn-close').show();
	})

	$('.btn-close').on('click', function(){
		$('.zoom').hide();
		$('.btn-close').hide();
	})
});