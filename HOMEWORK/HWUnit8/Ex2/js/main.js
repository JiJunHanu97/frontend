var increase = 0; 

function macDinh() {
	for(var i = 0; i< document.getElementsByClassName('text').length; i++) {
		document.getElementsByClassName('text')[i].style.fontSize="100%";
	}
}

function chuLon() {
	for(var i = 0; i< document.getElementsByClassName('text').length; i++) {

		increase += 40;
		document.getElementsByClassName('text')[i].style.fontSize=(increase + 100) + "%";
	}
}

function chuBe() {
	for(var i = 0; i< document.getElementsByClassName('text').length; i++) {

		increase -= 40;
		document.getElementsByClassName('text')[i].style.fontSize=(increase + 100) + "%";
	}
}