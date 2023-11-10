// let age = 17;
// let name = "Deven";

// console.log(age);
// console.log(name);

// age = prompt("What is your age: ");
// name = prompt("What is your name: ");

// console.log(age);
// console.log(name);

// alert("This is an alert!")


// const NameP = document.getElementById("name")
// console.log(NameP)
// NameP.innerText = name;
// NameP.style.color = "blue";

// const AgeP = document.getElementById("age")
// console.log(AgeP)
// AgeP.innerText = age;

let place = prompt("Enter a place: ");
let placeSpan = document.getElementById("place");
placeSpan.innerText = place;

let adjective = prompt("Enter an adjective: ");
let adjectiveSpan = document.getElementById("adjective");
adjectiveSpan.innerText = adjective;

let animal = prompt("Enter an animal: ");
let animalSpan1 = document.getElementsByClassName("animal")[0];
animalSpan1.innerText = animal;
let animalSpan2 = document.getElementsByClassName("animal")[1];
animalSpan2.innerText = animal;

let verb = prompt("Enter a verb: ");
let verbSpan = document.getElementById("verb");
verbSpan.innerText = verb;

let verb2 = prompt("Enter another verb: ");
let verb2Span = document.getElementById("verb2");
verb2Span.innerText = verb2;