function CheckAll() {
	for(var i = 0; i < document.querySelectorAll('form div input').length; i++) {
		document.querySelectorAll('form div input')[i].checked=true;
	}
}

function UnCheckAll() {
	for(var i = 0; i < document.querySelectorAll('form div input').length; i++) {
		document.querySelectorAll('form div input')[i].checked=false;
	}
}

function mOver(obj) {
	obj.style.background="#66ff66";
}	

function mOut(obj) {
	obj.style.background="";
}