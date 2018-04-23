// $(function(){
// 	$('.parent_panel').on('click', function(){
// 		index = $(this).index();
// 		list = $('.panel')
		
// 		$('.accordion').removeClass('changeColor')
// 		$('.panel').hide()
// 		$('.accordion').eq(0).text('First Panel')
// 		$('.accordion').eq(1).text('Second Panel')
// 		$('.accordion').eq(2).text('Third Panel')
// 		$('.accordion').eq(3).text('Fourth Panel')
// 		$('.icon i').addClass('fa-plus')
// 		$('.icon i').removeClass('fa-minus')
// 		$('.accordion').eq(index).text('This is an Expended Panel')
// 		$('.panel').eq(index).slideToggle();
// 		$('.icon i').eq(index).addClass('fa-minus')
// 		$('.icon i').eq(index).removeClass('fa-plus')
// 		$('.accordion').eq(index).addClass('changeColor')
// 	});

// 	$('.fa-plus').on('click', function(e){
// 			index = $(this).index();
// 			list = $('.panel')
// 			$('.accordion').removeClass('changeColor')
// 			$('.panel').toggle()
// 			$('.accordion').eq(0).text('First Panel')
// 			$('.accordion').eq(1).text('Second Panel')
// 			$('.accordion').eq(2).text('Third Panel')
// 			$('.accordion').eq(3).text('Fourth Panel')
// 			$('.icon i').addClass('fa-plus')
// 			$('.icon i').removeClass('fa-minus')
// 			$('.accordion').eq(index).text('This is an Expended Panel')
// 			$('.panel').eq(index).slideToggle();
// 			$('.icon i').eq(index).addClass('fa-minus')
// 			$('.icon i').eq(index).removeClass('fa-plus')
// 			$('.accordion').eq(index).addClass('changeColor')
// 		});
// });

$(document).ready(function() {
    var plus = '<i class="fa fa-plus" aria-hidden="true"></i>';
    var mimus = '<i class="fa fa-minus" aria-hidden="true"></i>';
 
    $('#pc1').hide();
 
    $('#btn-1').click(function() {
        if($('#btn-1').html() == plus) {
            $('#btn-1').html(mimus);
            $('#h1').css({color:'green'})
        }else {
            $('#btn-1').html(plus);
            $('#h1').css({color:'#fff'})
        }
 
        $('#btn-2').html(plus);
        $('#btn-3').html(plus);
        $('#btn-4').html(plus);
 		
        $('#pc1').slideToggle();
        $('#pc2').hide();
        $('#pc3').hide();
        $('#pc4').hide();
    });
 
    $('#pc2').hide();
    $('#btn-2').click(function() {
        if($('#btn-2').html() == plus) {
            $('#btn-2').html(mimus);
            $('#h2').css({color:'green'})
        }else {
            $('#btn-2').html(plus);
            $('#h2').css({color:'#fff'})
        }
 
        $('#btn-1').html(plus);
        $('#btn-4').html(plus);
        $('#btn-3').html(plus);
 
        $('#pc2').slideToggle();
        $('#pc1').hide();
        $('#pc3').hide();
        $('#pc4').hide();
    });
 
    $('#pc3').hide();
    $('#btn-3').click(function() {
        if($('#btn-3').html() == plus) {
            $('#btn-3').html(mimus);
            $('#h3').css({color:'green'})
        }else {
            $('#btn-3').html(plus);
            $('#h3').css({color:'#fff'})
        }
 
        $('#btn-1').html(plus);
        $('#btn-2').html(plus);
        $('#btn-4').html(plus);
 
        $('#pc3').slideToggle();
        $('#pc4').hide();
        $('#pc2').hide();
        $('#pc1').hide();
    });
 
    $('#pc4').hide();
    $('#btn-4').click(function() {
        if($('#btn-4').html() == plus) {
            $('#btn-4').html(mimus);
            $('#h4').css({color:'green'});
        }else {
            $('#btn-4').html(plus);
            $('#h4').css({color:'#fff'});
        }
 
        $('#btn-1').html(plus);
        $('#btn-2').html(plus);
        $('#btn-3').html(plus);
 
        $('#pc4').slideToggle();
        $('#pc3').hide();
        $('#pc2').hide();
        $('#pc1').hide();
    });
});