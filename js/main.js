// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creating 5 random integers in 5 different output dom Elements
for ( let i = 1; i <= 5; i++){
	document.getElementById(`num-${i}`).innerHTML += ` : ${randomInt(1, 1000)}`;
}
let resultOutput = document.querySelector('#result-output');
let userCorrectAnswers = 0 ;


setTimeout( function() {
	document.querySelector('#numbers-group').classList.add('d-none');
	for ( let i = 1; i <= 5; i++){
		let userAnswer;
		while(isNaN(userAnswer)){
			userAnswer = parseInt(prompt(`Insert number ${i} `));
		}
		if (document.getElementById(`num-${i}`).innerHTML = userAnswer){
			userCorrectAnswers++;
			resultOutput.innerHTML += ` User guessed number ${i} `;
		}
	}
	resultOutput.innerHTML += `Totally, user guessed ${userCorrectAnswers} numbers.`;
}, 3000);



/**Function that creates a random integer between two values
 * 
 * @param {*} min minimum value of the random integer 
 * @param {*} max maximum value of the random integer 
 * @returns a random integer between a min and a max value
 */
function randomInt (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}