$(function(){
	$('.bar').on('click', function(){
		$('nav ul')
	})

	$('.right').on('click', function(){
		$('#subMenu_1').slideToggle();
	})

	$('#bar').on('click', function(){
		$('.menu_responsive').css({
			width:'80%',
		})
	})

	$('#btn-close').on('click', function(){
		$('.menu_responsive').css({
			width:'0'
		})
	})
});




// var bar = '<i class="fa fa-bars" aria-hidden="true"></i>';
// var close = '<i class="fa fa-times" aria-hidden="true"></i>';
// var cong = '<i class="fa fa-plus" aria-hidden="true"></i>';
// var tru = '<i class="fa fa-minus" aria-hidden="true"></i>';

// $(function()
// {	
// 	var check = true;
// 	$('#icon').click(function()
// 	{

// 		if(check == true)
// 		{

// 			$('#icon').html(close).animate({  borderSpacing: -90 }, {
// 				step: function(now,fx) {
// 					$(this).css('-webkit-transform','rotate('+now+'deg)'); 
// 					$(this).css('-moz-transform','rotate('+now+'deg)');
// 					$(this).css('transform','rotate('+now+'deg)');
// 				},
// 				duration:'slow'
// 			},'linear');

// 			$("#menu_responsive").animate({"left":"0px"}, "slow");
// 			check = !check;

// 		}else
// 		{   

// 			$('#icon').html(bar).animate({  borderSpacing: 180 }, {
// 				step: function(now,fx) {
// 					$(this).css('-webkit-transform','rotate('+now+'deg)'); 
// 					$(this).css('-moz-transform','rotate('+now+'deg)');
// 					$(this).css('transform','rotate('+now+'deg)');
// 				},
// 				duration:'slow'
// 			},'linear');
// 			$("#menu_responsive").animate({"left":"-60%"}, "slow");
// 			check = !check;

// 		}

// 	});