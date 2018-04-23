

function tab1(obj) {
	document.getElementById('content-tab1').style.display="block";
	document.getElementById('content-tab2').style.display="none";
	document.getElementById('content-tab3').style.display="none";
	//xu ly mau nen
	document.getElementById('btn-tab2').style.background="";
	document.getElementById('btn-tab3').style.background="";
	//xu ly mau chu
	document.getElementById('btn-tab2').style.color="white";
	document.getElementById('btn-tab3').style.color="white"
	obj.style.background="white";
	obj.style.color="black";
}

function tab2(obj) {
	document.getElementById('content-tab1').style.display="none";
	document.getElementById('content-tab2').style.display="block";
	document.getElementById('content-tab3').style.display="none";
	//xu ly mau nen
	document.getElementById('btn-tab1').style.background="blue";
	document.getElementById('btn-tab3').style.background="";
	//xu ly mau chu
	document.getElementById('btn-tab1').style.color="white";
	document.getElementById('btn-tab3').style.color="white"
	obj.style.background="white";
	obj.style.color="black";
}

function tab3(obj) {
	document.getElementById('content-tab1').style.display="none";
	document.getElementById('content-tab2').style.display="none";
	document.getElementById('content-tab3').style.display="block";
	// xu ly mau nen
	document.getElementById('btn-tab1').style.background="blue";
	document.getElementById('btn-tab2').style.background="";
	//xu ly mau chu
	document.getElementById('btn-tab1').style.color="white";
	document.getElementById('btn-tab2').style.color="white"
	obj.style.background="white";
	obj.style.color="black";
}