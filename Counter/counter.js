let counter = document.getElementById('count');
function Decrease() {
	// body...
	counter = counter-1;
	document.getElementById('count').textContent = counter;
	if(counter<0){
		document.getElementById('count').style.color = 'red';
	}
	else if (counter == 0) {
		document.getElementById('count').style.color = 'black';
	}
	else{
		document.getElementById('count').style.color = 'green';
	}
}

function Reset() {
	// body...
	counter = 0;
	document.getElementById('count').textContent = counter;
	document.getElementById('count').style.color = 'black';
}

function Increase() {
	// body...
	counter = counter + 1;
	document.getElementById('count').textContent = counter;
	if(counter<0){
		document.getElementById('count').style.color = 'red';
	}
	else if (counter == 0) {
		document.getElementById('count').style.color = 'black';
	}
	else{
		document.getElementById('count').style.color = 'green';
	}
	
}