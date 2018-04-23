	var list = document.getElementsByTagName('input');
	var run_onchange = false;
	function check(){
		var errors = false;
		var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
		for (var i = 0; i < list.length; i++) {
			var value = list[i].value;
			var idName  = list[i].getAttribute('id');
			var span = document.createElement('span');
			var parent = list[i].parentNode;
			if(parent.lastChild.nodeName == 'SPAN'){parent.lastChild.remove()}
				if(list[i].value == ""){
					if(idName == "name"){
						span.innerHTML = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Yêu cầu nhập đầy đủ họ tên";
					}
					if(idName == "email"){
						span.innerHTML ="<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Yêu cầu nhập đầy đủ email";
					}
					if(idName == "phone"){
						span.innerHTML ="<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Yêu cầu nhập đầy đủ số điện thoại";
					}
					if(idName == "pass"){
						span.innerHTML ="<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Vui lòng nhập vào mật khẩu";
					}
					if(idName == "confirm_pass"){
						span.innerHTML ="<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Vui lòng xác nhận mật khẩu bạn vừa nhập";
					}
				}else{
					if(idName == "name"){
						if(value.length <= 8){
							span.innerHTML = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> Họ tên lớn hơn 8 ký tự";

						}
					}
					if(idName == "email"){
						if(reg_mail.test(value) == false){ span.innerHTML ="<i class='fa fa-exclamation-circle' aria-hidden='true'></i>  Email không hợp lệ (ví dụ: xyz@gmail.com)";}
						var email =value;
					}
					if(idName == "pass"){
						var pass = value;
					}
					if(idName == "confirm_pass" && value != pass){span.innerHTML ="<i class='fa fa-exclamation-circle' aria-hidden='true'></i>  Password nhập lại chưa đúng";}
					if(idName == "phone" && isNaN(value) == true){span.innerHTML ="<i class='fa fa-exclamation-circle' aria-hidden='true'></i>  Số điện thoại phải là kiểu số";}
					
				}
				if(span.innerHTML != '' ){
					list[i].parentNode.appendChild(span);
					span.style.color="red";
					errors = true;
					run_onchange = true;
					list[i].style.border = '1px solid #c6807b';

				}
			}
			if(errors == false){alert('Đăng ký thành công');}
			return !errors;
		}

		function send(){
			check();
		}
		for(var i=0; i<list.length; i++){
			var id = list[i].getAttribute('id');
			list[i].onchange = function(){
				if(run_onchange == true){	
					this.style.border = '1px solid #999';
					check();
				}
			}
		}

		function clearAll(){
			var list = document.getElementsByTagName('input');
			for (var i = 0; i < list.length; i++) {
				list[i].value = "";
			}
		}