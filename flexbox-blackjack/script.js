let userCardSpace1 = document.getElementById("playercard1")
let userCardSpace2 = document.getElementById("playercard2")
let userCardSpace3 = document.getElementById("playercard3")
let userCardSpace4 = document.getElementById("playercard4")
let dealerCardSpace1 = document.getElementById("dealercard1")
let dealerCardSpace2 = document.getElementById("dealercard2")
let dealerCardSpace3 = document.getElementById("dealercard3")
let dealerCardSpace4 = document.getElementById("dealercard4")
let dealerScoreElement = document.getElementById("dealerscore")
let playerScoreElement = document.getElementById("playerscore")
let hitButton = document.getElementById("hit")
let standButton = document.getElementById("stand")
let resetButton = document.getElementById("reset")
let messageElement = document.getElementById("messages")
let dealerGamesWonElement = document.getElementById("")
let userGamesWonElement = document.getElementById("")


let playerScore = 0;
let dealerScore = 0;
let cardDeck = []
let playerCards = []
let dealerCards = []

let cardScoreValues = {
  '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'JH': 10, 'QH': 10, 'KH': 10, 'AH': 11,
  '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'JD': 10, 'QD': 10, 'KD': 10, 'AD': 11,
  '2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'JC': 10, 'QC': 10, 'KC': 10, 'AC': 11,
  '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 10, 'QS': 10, 'KS': 10, 'AS': 11,
};

function drawCard(cardList) {
	let randomNum = Math.floor(Math.random()*(cardList.length-1));
	const drawnCard = cardList.splice(randomNum, 1)[0];
	return drawnCard;
}

function reset() {
	

	playerScore = 0;
	dealerScore = 0;

	messageElement.innerText = "Your turn."

	cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];

	let playerCard1 = drawCard(cardDeck);
	let playerCard2 = drawCard(cardDeck);
	playerCards.push(playerCard1)
	playerCards.push(playerCard2)
	console.log(playerCards)
	

	let dealerCard1 = drawCard(cardDeck);
	let dealerCard2 = drawCard(cardDeck);
	dealerCards.push(dealerCard1)
	dealerCards.push(dealerCard2)
	console.log(dealerCards)

	dealerCardSpace1.src = "images/back.png";
	dealerCardSpace2.src = "images/" + dealerCard2 + ".svg";
	
	userCardSpace1.src = "images/" + playerCard1 + ".svg";
	userCardSpace2.src = "images/" + playerCard2 + ".svg";

	dealerScore = cardScoreValues[dealerCard1] + cardScoreValues[dealerCard2];
	playerScore = cardScoreValues[playerCard1] + cardScoreValues[playerCard2];
	dealerScoreElement.innerText = "Score: ?"
	playerScoreElement.innerText = "Score: " + playerScore

	standButton.disabled = false;

	hitButton.disabled = false;

	dealerCardSpace3.style.opacity = "0.0"
	dealerCardSpace4.style.opacity = "0.0"

	userCardSpace3.style.opacity = "0.0"
	userCardSpace4.style.opacity = "0.0"


}

function hit() {
	alert("you clicked hit lmao");

	let playerCard3 = drawCard(cardDeck);
	playerCards.push(playerCard3)
	userCardSpace3.src = "images/" + playerCard3 + ".svg";
	dealerCardSpace3.style.opacity = "1"

	
	
}

function stand() {
	alert("you clicked stand lmao");
}