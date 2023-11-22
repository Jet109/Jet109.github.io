const UserName = document.querySelector("#UserName");
const UserChoice = document.querySelector("#UserChoice");
const CompChoice = document.querySelector("#CompChoice");
const RPS = document.querySelectorAll(".RPS");
const GameNum = document.querySelector("#GameNum");

let player;
let computer;
let result;
let GameCounter=0;
let Gameover = "Game has Ended";
let KeepPlaying = "Keep playing";

RPS.forEach(button => button.addEventListener ("click", () => {

player = button.textContent;
ComputerSelection();
UserName.textContent = `Player: ${player}`;
UserChoice.textContent = `Computer: ${computer}`;
CompChoice.textContent = CheckWinner ();


}));

GameNum.textContent =  GameCount ();



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
	console.log(GameCounter);

	if (player == computer) {
		GameCounter++
	alert ("The result is a draw")
		
	}

	else if (computer === "ROCK") {
		GameCounter++
		return player == "PAPER" ? "You have won!" : "You have lost"
			
	}

	else if (computer === "PAPER") {
		GameCounter++
		return (player == "SCISSORS") ? "You have won!" : "You have lost"
		
	}

	else if (computer === "SCISSORS") {
		GameCounter++
		return (player == "ROCK") ? "You have won!" : "You have lost"
		
	}

}

function GameCount () {

	for (let i=0; i=3; i++) {
		GameCounter=0;
		if (GameCounter<3) {
			
			return KeepPlaying;

		}

		else if (GameCounter>=3) {

			return Gameover;
		}

		else {

			return Kev;
		}

	}

}






