let gameResult = document.getElementById('gameResult');

let random = Math.ceil(Math.random() * 100);

function checkResult() {
	// body...
	let userInput = document.getElementById('userInput');
	let guessNum = parseInt(userInput.value);
	if( guessNum == random){
		document.getElementById('gameResult').textContent = 'Congratulations!! You got it right';
		document.getElementById('gameResult').style.backgroundColor = 'green';
	}
	else if(guessNum > random){
		document.getElementById('gameResult').textContent = 'Too High!! Try again';
		document.getElementById('gameResult').style.backgroundColor = 'black';
	}
	else if(guessNum < random){
		document.getElementById('gameResult').textContent = 'Too Low!! Try again';
		document.getElementById('gameResult').style.backgroundColor = 'black';
	}
	else {
		document.getElementById('gameResult').textContent = "Please provide a valid input.";
		document.getElementById('gameResult').style.backgroundColor = "#1e217c";
    }

}