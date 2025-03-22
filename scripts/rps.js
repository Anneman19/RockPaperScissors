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

document.querySelector("#rock").addEventListener("click", (event) => {
    playRound("rock");
});

document.querySelector("#paper").addEventListener("click", (event) => {
    playRound("paper");
});

document.querySelector("#scissors").addEventListener("click", (event) => {
    playRound("scissors");
});

function playRound(userChoice) {

    if (roundNumber > 5) {
        alert("Game Over! Refresh to play again.");
        return;
    }

    const computerChoice = options.get(computerSelection(1, 3));

    let outcomeOfRound = "";
	
	if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
		alert("Invalid choice!");
	} else {
		alert("The computer chose: " + computerChoice);
		if (computerChoice == "rock" && userChoice == "paper") {
            outcomeOfRound = "Win";
			userScore += 1;
            createResults(outcomeOfRound);
			roundNumber += 1;
		} else if (computerChoice == "rock" && userChoice == "scissors") {
            outcomeOfRound = "Lose";
			computerScore += 1;
            createResults(outcomeOfRound);
			roundNumber += 1;
		} else if (computerChoice == "paper" && userChoice == "rock") {
            outcomeOfRound = "Lose";
			computerScore += 1;
            createResults(outcomeOfRound);
			roundNumber += 1;
		} else if (computerChoice == "scissors" && userChoice == "rock") {
            outcomeOfRound = "Win";
			userScore += 1;
            createResults(outcomeOfRound);
			roundNumber += 1;
		} else if (computerChoice == "paper" && userChoice == "scissors") {
            outcomeOfRound = "Win";
			userScore += 1;
            createResults(outcomeOfRound);
			roundNumber += 1;
		} else if (computerChoice == "scissors" && userChoice == "paper") {
            outcomeOfRound = "Lose";
			computerScore += 1;
            createResults(outcomeOfRound);
			roundNumber += 1;
		} else {
            outcomeOfRound = "Tie";
            createResults(outcomeOfRound);
		}

        if (roundNumber > 5) {
            createFinalResult();
        }
        
    } 
}

function createResults(outcomeOfRound) {
    let parentResults = document.querySelector("#results");

        let updateParagraph = document.createElement("p");

        if (outcomeOfRound === "Tie") {
            updateParagraph.style["background-color"] = "green";
        } else {
            updateParagraph.style["background-color"] = "blue";
        }

        updateParagraph.style["color"] = "white";
        updateParagraph.innerHTML = "Round " + roundNumber + ": " + outcomeOfRound + "<br>" + "Your Score: " + userScore + "<br>" + "Computer Score: " + computerScore;
        
        parentResults.appendChild(updateParagraph);
}

function createFinalResult() {
    let finalResults = document.querySelector("#results");

        let finalParagraph = document.createElement("p");
        finalParagraph.style["background-color"] = "red";
        finalParagraph.style["color"] = "white";
        finalParagraph.style["font-weight"] = "bold";
        finalParagraph.innerHTML = "Final Results:" + "<br>" + "Your Score: " + userScore + "<br>" + "Computer Score: " + computerScore + "<br>" + getWinner();
        
        finalResults.appendChild(finalParagraph);
}

function getWinner() {
    if (userScore > computerScore) {
        return "You Win!";
    } else if (userScore < computerScore) {
        return "You Lose!";
    } else {
        return "It's a tie!";
    }
}