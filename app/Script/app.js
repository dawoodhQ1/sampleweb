function handleClick(){
var userName = document.getElementById('user').value
var password = document.getElementById('pass').value

	if (userName === 'dawoodh' && password === '12345'){
		console.log('correct');
		window.location.replace('file:///C:/workspace/sampleweb/app/Template/cart.html');
	}else {
		console.log('in-correct');
	}

}