$(function(){
	$('#bar').on('click', function(){
		$('.menu_responsive').show();
	})

	$('#bar').on('click', function(){
		$('.menu_responsive').css({
			width:'100%',
			// z-index: 10;
		})
	})

	$('#btn-close').on('click', function(){
		$('.menu_responsive').hide();
	})
});
// window.onscroll = function() {myFunction()};
// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }