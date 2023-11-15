const UserName = document.querySelector("#UserName");
const UserChoice = document.querySelector("#UserChoice");
const CompChoice = document.querySelector("#CompChoice");
const RPS = document.querySelectorAll(".RPS");

let player;
let computer;
let result;

RPS.forEach(button => button.addEventListener ("click", () => {

player = button.textContent;
ComputerSelection();
UserName.textContent = `Player: ${player}`;
UserChoice.textContent = `Computer: ${computer}`;
CompChoice.textContent = CheckWinner ();

}));

function ComputerSelection (){

	const RandNum = Math.floor(Math.random () * 3);
 
	switch(RandNum){
		case 1:
		computer = "ROCK";
		break;

		case 2:
		computer = "PAPER";
		break;

		case 3:
		computer = "SCISSORS";

	}

}

function CheckWinner(){

	player=player.trim();
	computer=computer.trim();

	if (player == computer) {
	alert ("The result is a draw")
	}

	else if (computer === "ROCK") {
		return player == "PAPER" ? "You have won!" : "You have lost"
	}

	else if (computer === "PAPER") {
		return (player == "SCISSORS") ? "You have won!" : "You have lost"
	}

	else if (computer === "SCISSORS") {
		return (player == "ROCK") ? "You have won!" : "You have lost"
	}



}