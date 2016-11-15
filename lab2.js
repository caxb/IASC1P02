var age = prompt("What is your age?");

var numAge = Number(age);

var todayDate = new Date();
var year = todayDate.getFullYear();

var birthYear= year - age

document.getElementById("output").textContent=birthYear;
