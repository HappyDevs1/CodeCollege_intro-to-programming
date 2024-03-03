//VARIABLES

//let age;
//age = 12;

//let age = 12;
//age = 13;
//console.log("age is" + age);

//let numberOfSiblings = 1+3;
//let numberOfCandles = 8;
//console.log(numberOfCandles / numberOfSiblings);

/*
let secondsInAMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

let hoursInADay = 24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);

let daysInAYear = 365;
let secondsInAYear = daysInAYear * secondsInADay;
console.log(secondsInAYear);

let age = 23;
let secondsInMyAge = age * secondsInAYear;
console.log("I am" + " " + secondsInMyAge);
*/

//INCREMENTATIONA AND DECREMENTATION
/*
let highFives = 0;
++highFives;
console.log(highFives);

++highFives;
--highFives;
console.log(highFives);

highFives = 0
++highFives;
console.log(highFives);

++highFives;
--highFives;
console.log(highFives);

highFives = 0;
highFives++;
console.log(highFives);


//plus, minus, multiply, divide, equals, toString
let balloons = 100;
balloons *= 2;
console.log(balloons)

balloons = 200;
balloons /= 4;
console.log(balloons);

let yourName = prompt("What is your name");
alert ("Welcome to our THEME park FOR adults!");
alert (yourName + "What is your height in inches");

let yourName = "Happy";
alert (yourName + "Welcome to our THEME park FOR kids!");
let height = prompt(yourName + "What is your height in inches?");

EQUALS TO
let mySecretNumber = 5;
letchicoGuess = 3;
alert (mySecretNumber === chicoGuess);
let harpoGuess = 7;
alert (mySecretNumber === harpoGuess)
let grouchoGuess = 5;
alert (mySecretNumber === grouchoGuess);
let yourGuess = parseInt(prompt("Guess a number?"));
*/

let age = parseInt(prompt("What is your age?"));
let accompanied = confirm ("Are you accompanied by an adult?");
alert ("Are you allowed to watch the movie?" + (age >= 12 || accompanied));
