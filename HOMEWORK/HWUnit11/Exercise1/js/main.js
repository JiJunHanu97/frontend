$(function (){
	var dem = 0;
	var button = $('.btn');

	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function check(){
		var error = false;
		var input = $('#next').parent().prev().children().children().filter('.active_form').children('input');
		var x ='';
		
		$('.error').remove();
		for (var i = 0; i < input.length; i++) {
			
			var id = input[i].getAttribute('id');
			var value =input[i].value;
			var span = document.createElement('span');
			if( value == ''){
				x ='This field is required.'
				
			}else{
				input[i].style.border = '1px solid lightgray';
				input[i].style.background = '#fff';
				if(id == 'email'){
		 			// alert(value)
		 			if(!isEmail(value)){ x ='Email không đúng định dạng.';}
		 			var email =value;
		 		}
		   		// Kiểm tra password
		   		if(id == 'password'){
		   			if(value.length <6){x ='Mật khẩu tối thiểu 6 kí tự.';}
		   			var pass =value;
		   		}
		     	// Kiểm tra password nhập lại
		     	if(id == 'confirm_pass' && value != pass){

		     		x ='Mật khẩu nhập lại chưa đúng.';
		     	}
		     }
		     if(x != ""){
		 		// alert(i);
		 		$('<span for="email-2" class="error">'+x+'</span>').insertAfter($(input[i]).prev());
		 		input[i].style.border = '1px solid #c6807b';
		 		input[i].style.background = '#fffcf9';
		 		error = true;
		 	}
		 }
		 return error;
		 
		}
		$(this).keyup(function(){
			check();
		})

		$('#next').click(function(){
			if(check() == true){
				check();
				$(button[dem]).addClass('error_button');
				$(button[dem]).removeAttr('disabled');
			}else{
				var x = dem + 1;
				if(x > 3){
					$(button[3]).removeClass('error_button');
					$(button[3]).removeClass('active_button ');
					$(button[3]).addClass('active_button ');
					$(button[3]).attr("disabled", true);
					var form = $('.form-group');
					$(form).removeClass('active_form');
					if($("#checkbox").is(':checked')) {
						alert('Đăng ký thành công!');
					}else{
						alert(' You have to agree with the terms and Conditions.')
					}
				}else{
					$(button[dem]).removeClass('error_button');
					dem++;
					$(button[dem]).removeClass('active_button ');
					$(button[dem]).addClass('active_button ');

					$(button[dem]).removeAttr('disabled');
					$(button).not(button[dem]).attr("disabled", true);
					var form = $('.form-group');
					$(form).removeClass('active_form');
					$(form[dem]).addClass('active_form');
				}
			}
		})

		$('#prev').on('click', function(){
			if(dem != 0){
				dem--;
				$(button[dem]).removeClass('active_button ');
				$(button[dem]).addClass('active_button ');
				
				$(button[dem]).removeAttr('disabled');
				$(button).not(button[dem]).attr("disabled", true);
				var form = $('.form-group');
				$(form).removeClass('active_form');
				$(form[dem]).addClass('active_form');
			}
		})
		function warning(age) {
			if($("#age").value('>=18') ) {
				$("#warning").hide();
				$("#finish").show();
			} else{
				$('warning').show();
			}
		}
	})


