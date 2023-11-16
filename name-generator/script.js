function do_it() {

let age = document.getElementById("age").value;
let month = document.getElementById("month").value
let fish = document.getElementById("fish").value
let name = document.getElementById("name");

console.log(age)
console.log(month)

let firstName = '';
let middleName = '';
let lastName = '';

if (age < 5) {
	firstName = "Angry";
}


else if (age >= 5 && age < 15) {
	firstName = "Funny"
}

else if (age >= 15 && age < 17) {
	firstName = "Goofy"
}

else if (age >= 17 && age < 18) {
	firstName = "Intersting"
}

else if (age >= 18 && age < 20) {
	firstName = "Special"
}

else if (age >= 20) {
	firstName = "Quick"
}

if (month =="JAN" || month =="FEB"|| month =="MAR" ) {
	lastName = " Octopus"
}

else if (month =="APR" || month =="MAY"|| month =="JUN" ) {
	lastName = " Fish"
}

else if (month =="JUL" || month =="AUG"|| month =="SEP" ) {
	lastName = " Starfish"
}

else if (month =="OCT" || month =="NOV"|| month =="DEC" ) {
	lastName = " Shark"
}

if (fish == "tuna") {
	middleName = " Shiny"
}

else if (fish == "salmon") {
	middleName = " Walrus"
}

else if (fish == "crab") {
	middleName = " Ultra"
}

else if (fish == "blue gill") {
	middleName = " Hard-Working"
}

else if (fish == "other") {
	middleName = " Hungry"
}

else {

}

name.innerText = "Your UNDER THE SEA THEMED NAME is: " + firstName + middleName + lastName;

}