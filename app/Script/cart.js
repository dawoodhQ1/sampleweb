function handleTabClick(tab){
	var Men = document.getElementById('M');
	var Women = document.getElementById('W');
	var Boy = document.getElementById('B');
	var Girl = document.getElementById('G');

	if(tab === 'Men'){
		 console.log('Clicked Men');

		 Men.className = "";
		 Women.className = "hide";
		 Boy.className = "hide";
		 Girl.className = "hide";
	}	

	else if(tab === 'Women'){
		 console.log('Clicked Women');

		  Men.className = "hide";
		 Women.className = "";
		 Boy.className = "hide";
		 Girl.className = "hide";
	}

	else if(tab === 'Boy'){
		 console.log('Clicked Boy');

		  Men.className = "hide";
		 Women.className = "hide";
		 Boy.className = "";
		 Girl.className = "hide";
	}

	else if(tab === 'Girl'){
		 console.log('Clicked Girl');

		  Men.className = "hide";
		 Women.className = "hide";
		 Boy.className = "hide";
		 Girl.className = "";
	}
}