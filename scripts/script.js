const options = new Map();
options.set(1, "rock");
options.set(2, "paper");
options.set(3, "scissors");

function computerSelection(min, max) {
    const minChoice = Math.ceil(min);
    const maxChoice = Math.floor(max);

    return Math.floor(Math.random() * (maxChoice - minChoice + 1) + minChoice);;
}

let userScore = 0;
let computerScore = 0;
let roundNumber = 1;

while (roundNumber <= 5) {

    alert("Round " + roundNumber);

	alert("Scores: " +
		"\nYour score: " + userScore +
		"\nComputer score: " + computerScore
	);

    const computerChoice = options.get(computerSelection(1, 3));
    const userChoice = prompt("Rock, paper, or scissors: ").toLowerCase();
	alert("You chose: " + userChoice);
	
	if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
		alert("Invalid choice!");
	} else {
		alert("The computer chose: " + computerChoice);
		if (computerChoice == "rock" && userChoice == "paper") {
			alert("You Win!");
			userScore += 1;
			roundNumber += 1;
		} else if (computerChoice == "rock" && userChoice == "scissors") {
			alert("You Lose!");
			computerScore += 1;
			roundNumber += 1;
		} else if (computerChoice == "paper" && userChoice == "rock") {
			alert("You Lose!");
			computerScore += 1;
			roundNumber += 1;
		} else if (computerChoice == "scissors" && userChoice == "rock") {
			alert("You Win!");
			userScore += 1;
			roundNumber += 1;
		} else if (computerChoice == "paper" && userChoice == "scissors") {
			alert("You Win!");
			userScore += 1;
			roundNumber += 1;
		} else if (computerChoice == "scissors" && userChoice == "paper") {
			alert("You Lose!");
			computerScore += 1;
			roundNumber += 1;
		} else {
			alert("It's a tie!");
		}
	} 
}

if (userScore > computerScore) {
	alert("You've won the game!");
} else {
	alert("You've lost the game!");
}