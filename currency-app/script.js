

let money = prompt("Enter how much money YOU HAVE IN USD: ");
let EUR = parseInt(money) * .94
let GBP = parseInt(money) * .82
let CAD = parseInt(money) * 1.38
let CHF = parseInt(money) * .90
let JPY = parseInt(money) * 151.50

let EURSpan = document.getElementById("EUR");
EURSpan.innerText = EUR;

let GBPSpan = document.getElementById("GBP");
GBPSpan.innerText = GBP;

let CADSpan = document.getElementById("CAD");
CADSpan.innerText = CAD;

let CHFSpan = document.getElementById("CHF");
CHFSpan.innerText = CHF;

let JPYSpan = document.getElementById("JPY");
JPYSpan.innerText = JPY;

EURSpan.style.color = "red";
GBPSpan.style.color = "orange";
CADSpan.style.color = "green";
CHFSpan.style.color = "blue";
JPYSpan.style.color = "purple";












