		var index = 0;
		var total = document.getElementsByClassName('anh').length;
		var timeout;
		
		function slide(x){
			clearTimeout(timeout);
			if(index >= total && x === 1){
				index = 1;
			}
			else if(index <= 1 && x === -1){
				index = total;
			}
			else{
				index += x;
			}
			// alert(index)
			for (var i = 1; i <= total; i++) {
				document.getElementById('img'+i).classList.remove('active');
				document.getElementById('dot'+i).classList.remove('dot_active');
			}
			document.getElementById('img'+index).classList.add('active');
			document.getElementById('dot'+index).classList.add('dot_active');
			timeout = setTimeout(change,10000);
		}
		change();
		function change(){
			var total = document.getElementsByClassName('anh').length;
			for (var i = 1; i <= total; i++) {
				document.getElementById('img'+i).classList.remove('active');
				document.getElementById('dot'+i).classList.remove('dot_active');
			}
			index++;
			if(index > total){ index = 1;}
			document.getElementById("img"+index).classList.add("active");
			document.getElementById('dot'+index).classList.add('dot_active');
			timeout = setTimeout(change,10000);
		}

		 function choose(i){
		 	clearTimeout(timeout);
		 	
			var overall = document.getElementsByClassName('point');
			overall = Array.from(overall);
			index = overall.indexOf(i)+1;
			for (var i = 1; i <= total; i++) {
				document.getElementById('img'+i).classList.remove('active');
				document.getElementById('dot'+i).classList.remove('dot_active');
			}
			document.getElementById('img'+index).classList.add('active');
			document.getElementById('dot'+index).classList.add('dot_active');
			timeout = setTimeout(change,10000);
		 }