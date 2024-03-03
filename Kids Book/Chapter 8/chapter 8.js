/*
function ourFirstFunction() {
  console.log("Hello World!")
}
ourFirstFunction();

sayHello("Happyyy");

function sayHello(name) {
  console.log(`Hello ${name}`)
};

sayHello("Happyyy");
sayHello("Happyyy");

//PROGRAMMING CHALLENGES
console.log(36325 * 9824 + 777)
function add (n1, n2) {
  return n1 + n2;
};

function multiply (num1, num2) {
  return num1 * num2
};
console.log(multiply(36325, 9824, 777));

"use strict";
let words = ["javascript", "monkey", "amazing", "pancake"];
let word = pickWord();

let answerArray = [];
setUpAnswerArray();
let remainingLetters = word.length;
let guess;
let lives = 3;
let correctGuess;

//Main game loop
alert("Welcome to the Hangman game");
while (remainingLetters > 0 && lives > 0) {
  //show player progress
  showPlayerProgress();
  guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length > 1) {
    alert("Please guess one letter only!");
  } else {
    let correctGuesses = updateGameState();
    remainingLetters -= correctGuesses;
  }
 };
 //after while loop
 
 //After running the while loop
 showAnswerAndCongratulatePlayer();

 function pickWord () {
  //return a random word
  return words[Math.floor(Math.random() * words.length)];
 };

 function setUpAnswerArray () {
  //Retuen the answer array
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  };
 };

 function showPlayerProgress () {
//Use alert to show the player their progress
alert(answerArray.join(" "));
 };
 
 function getGuess () {
//Use prompt to guess
return prompt("Guess a letter or click cancel to stop playing the game.\n You have " + lives + " lives remaining." )
 };

 function updateGameState () {
// Update answerArray and return a number showing how many
 // times the guess appears in the word so remainingLetters
 // can be updated
 guess = guess.toLowerCase();
    correctGuess = 0;
    for (let j = 0; j < word.length; j++) {
      if (guess === word[j]) {
        if (answerArray[j] !== "_") {
          alert("You have already guessed this letter " + guess);
          break;
        } else {
          answerArray[j] = guess;
          //correctGuess++;
        }
      }
    }
    if (correctGuess === 0) {
      lives--;
    }
    return correctGuess;
 };

 function showAnswerAndCongratulatePlayer () {
//Use alert to show the answer and congragulate the player
if (guess === null) {
  alert("Sorry to see you are leaving.\nThe answer was " + word);
 } else if (remainingLetters === 0) {
  alert("Congratulations! The word is " + word);
 } else if (lives === 0) {
  alert("You ran out of lives. The word was " + word);
 } else {
  alert("Something seriously went wrong!")
 };
 };

 function multiply (num1, num2) {
  return num1 * num2
};
console.log(multiply(36325, 9824, 777));

function areArraysSame (array1, array2) {
  if (array1 === array2) {
    return true;
  } else {
    return false
  }
};

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
*/

function checkAge() {
  let age = prompt("How old are you?");

  if (age < 18) {
    return alert("Sorryyy, you are not allowed to drive");
  } else if (age === null) {
    alert("Please specify your age");
  } else {
    alert("Congratulation, you are allowed to drive");
  }
};

checkAge();


/*
function getLocation () {
  return prompt("What is your location?");
};

function displayLocation (location) {
  alert(`Your location is ${location}`);
};
displayLocation(getLocation());
*/
