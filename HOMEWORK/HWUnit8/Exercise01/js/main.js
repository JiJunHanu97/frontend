function checkAll(){
	var check = document.getElementsByClassName('checkboxx');
	for (var i = 0; i < check.length  ; i++) {
		check[i].checked = true;
	}
}


function unCheckAll(){
	var check = document.getElementsByClassName('checkboxx');

	for (var j = 0; j < check.length ; j++) {
		check[j].checked = false;
	}
}