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
let dealerGamesWonElement = document.getElementById("dealerCount")
let userGamesWonElement = document.getElementById("playerCount")


let playerScore = 0;
let dealerScore = 0;
let cardDeck = []
let playerCards = []
let dealerCards = []
let dealerGamesWon = 0;
let playerGamesWon = 0;


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
	playerCards.length = 0;
	dealerCards.length = 0;
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

	if ((playerCard1 == 'AC' || playerCard1 == 'AD' || playerCard1 == 'AH' || playerCard1 == 'AS') && (playerCard2 == 'AC' || playerCard2 == 'AD' || playerCard2 == 'AH' || playerCard2 == 'AS')) {
		messageElement.innerText = "WOW YOU GOT 2 ACES! THAT MEANS YOU WIN! Press stand to continue."
	}

}

function hit() {
	console.log(playerScore)
	resetButton.disabled = true;
	if (playerCards.length == 2) {
	cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];
	let playerCard3 = drawCard(cardDeck);
	playerCards.push(playerCard3)
	userCardSpace3.src = "images/" + playerCard3 + ".svg";
	userCardSpace3.style.opacity = "1"
	playerScore = playerScore + cardScoreValues[playerCard3];
	playerScoreElement.innerText = "Score: " + playerScore;
	console.log(playerScore)
}

	else if (playerCards.length == 3) {
	cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];
	let playerCard4 = drawCard(cardDeck);
	playerCards.push(playerCard4)
	userCardSpace4.src = "images/" + playerCard4 + ".svg";
	userCardSpace4.style.opacity = "1"
	playerScore = playerScore + cardScoreValues[playerCard4];
	playerScoreElement.innerText = "Score: " + playerScore;
	console.log(playerScore)
}
	

	if (playerScore > 21) {
	messageElement.innerText = "You Bust 😂"
	standButton.disabled = true;
	hitButton.disabled = true;
	resetButton.disabled = false;
	dealerGamesWon = dealerGamesWon + 1
	dealerGamesWonElement.innerText = dealerGamesWon
}
	
}

function stand() {
	resetButton.disabled = true;
    hitButton.disabled = true;
    standButton.disabled = true;
    dealerCardSpace1.src = "images/" + dealerCards[0] + ".svg";
    dealerScore = cardScoreValues[dealerCards[0]] + cardScoreValues[dealerCards[1]];
    dealerScoreElement.innerText = "Score: " + dealerScore;

    function dealerhit1() {
        if (dealerScore < 17) {
            dealerScore = cardScoreValues[dealerCards[0]] + cardScoreValues[dealerCards[1]];
            let dealerCard3 = drawCard(cardDeck);
            dealerCards.push(dealerCard3);
            dealerCardSpace3.src = "images/" + dealerCard3 + ".svg";
            dealerCardSpace3.style.opacity = "1";
            dealerScore = dealerScore + cardScoreValues[dealerCard3];
            dealerScoreElement.innerText = "Score: " + dealerScore;
            console.log(dealerScore);
            console.log(playerScore);
            setTimeout(dealerhit2, 2000);
        }
    }

    function dealerhit2() {
        if (dealerScore < 17) {
            dealerScore = cardScoreValues[dealerCards[0]] + cardScoreValues[dealerCards[1]] + cardScoreValues[dealerCards[2]];
            let dealerCard4 = drawCard(cardDeck);
            dealerCards.push(dealerCard4);
            dealerCardSpace4.src = "images/" + dealerCard4 + ".svg";
            dealerCardSpace4.style.opacity = "1";
            dealerScore = dealerScore + cardScoreValues[dealerCard4];
            dealerScoreElement.innerText = "Score: " + dealerScore;
            console.log(dealerScore);
            console.log(playerScore);
            setTimeout(checkGameOutcome, 1000); 
        }
    }

    function checkGameOutcome() {
        if (dealerScore > playerScore && dealerScore < 22) {
            messageElement.innerText = "You LOSE HAHA 😂. Try again";
            dealerGamesWon = dealerGamesWon + 1
			dealerGamesWonElement.innerText = dealerGamesWon
			resetButton.disabled = false;
        } else if (dealerScore == playerScore) {
            messageElement.innerText = "You Tie 😐 But because this is 'Deven's DANGEROUS Black Jack Table, ties go to the house.";
  			dealerGamesWon = dealerGamesWon + 1
			dealerGamesWonElement.innerText = dealerGamesWon
			resetButton.disabled = false;
        } else {
            messageElement.innerText = "You WIN 🏆";
            playerGamesWon = playerGamesWon + 1
			userGamesWonElement.innerText = playerGamesWon
			resetButton.disabled = false;
        }
    }

    setTimeout(dealerhit1, 1000);
    setTimeout(checkGameOutcome, 3000);
    console.log(dealerScore);
    console.log(playerScore);
}
