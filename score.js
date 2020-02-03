var p1Button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display= document.querySelector("#p1Display");
var p2Display= document.querySelector("#p2Display");
var numInput= document.querySelector("input");
var winningScoreDisplay= document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameState = false;
var winningscore = 5;

console.log(winningScoreDisplay);

document.getElementById("reset").addEventListener("click", function () {reset()});
  
resetButton.addEventListener("on click", console.log("reset clicked") /* reset() */);

p1Button.addEventListener("click", function() {
	if(!gameState){
		p1Score++;
		if (p1Score===winningscore) {gameState=true; p1Display.classList.add("winner");}
		p1Display.textContent =p1Score;};
});

p2button.addEventListener("click", function (){
	if(!gameState){
		p2Score++;
		if (p2Score===winningscore) {gameState=true; p2Display.classList.add("winner");}
		p2Display.textContent =p2Score;};
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameState =false;
	console.log("reset");
	}

numInput.addEventListener("change", function (){
console.log(numInput.value);
winningscore=parseInt(numInput.value);
winningScoreDisplay.textContent = numInput.value;
reset();
});
