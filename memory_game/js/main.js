console.log("Up and running!");

/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found the first match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

/*
console.log ("User flipped " + cardThree);
console.log("User flipped " + cardFour);
*/

console.log("User flipped queen");
console.log("User flipped king");