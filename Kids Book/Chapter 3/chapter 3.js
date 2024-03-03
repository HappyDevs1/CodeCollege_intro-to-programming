/*
let dinosaurs = [
  "T-Rex",
  "Velociraptor",
  "Triceratops",
  "Brachiosauraurus",
  "Ptaranodon",
  "Apatosaurus",
  "Diplodocus",
  "Compsognathus",
];
alert(dinosaurs[0]);
dinosaurs[0] = "Trynnosaurus Rex";
alert(dinosaurs[0]);

let dinosaurs = [];
dinosaurs[0] = "T-Rex",
dinosaurs[1] = "Velociraptor",
dinosaurs[2] = "Triceratops",
dinosaurs[3] = "Brachiosauraurus",
dinosaurs[4] = "Ptaranodon",
dinosaurs[5] = "Apatosaurus",
dinosaurs[6] = "Diplodocus",
dinosaurs[7] = "Compsognathus";

console.log(dinosaurs);

let dinosaursAndNumbers = [
  3,
  "dinosaurs",
  ["triceratops", "stegosaurus", 3627.5],
  10,
];

console.log(dinosaursAndNumbers[2]);
console.log(dinosaursAndNumbers[2][0]);
console.log(dinosaursAndNumbers[2][2]);
console.log(dinosaursAndNumbers[3]);


let maniacs = ["Yakko", "Wakko", "Dot"];
console.log(maniacs[0]);
let len = maniacs.length;
//console.log("length of a manic is" + " " + len);
console.log(maniacs.length - 1);

let animals = [];
animals.push("Cat");
animals.push("Dog");
animals.push("Llama");
console.log(animals);
//Adding item to the front of the array
animals.unshift("Monkey");
console.log(animals);
animals.unshift("Bear");
console.log(animals);
//displaying last index in the array
let lastAnimals = animals.pop();
console.log(lastAnimals);
//removing first item of the array
let firstAnimal = animals.shift();
console.log(firstAnimal);

let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
let scalyAnimals = ["Boa Constrictor", "Godzilla"];
let featheredAnimals = ["Macaw", "Dodo"];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);

let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
console.log(boringAnimals);
boringAnimals = boringAnimals.join();
console.log(boringAnimals);

console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 20));

//Making a decision on which country to go to a vacation to
let countries = ["Japan", "Canada", "Singapore", "Egypt", "Australia"];

const randomIndex = Math.floor(Math.random() * countries);


let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

let bodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let adjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let animal = randomWords[Math.floor(Math.random() * randomWords.length)];

let insult = "Your " + bodyPart + " is like a " + adjective + " " + animal;
alert(insult);
*/

//PROGRAMMING CHALLENGE - ARRAYS
let randomBodyParts = ["Nose", "Head", "Toe"];
let randomAdjectives = ["Big", "Ugly", "Dirty"];
let randomAnimals = ["Pig's", "Elephant's", "Lion's"];
let randomAnimalBodyPart = ["Ear", "Butt", "Mouth"];

let selectedBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let selectedAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let selectedAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let selectedAnimalBodyPart = randomAnimalBodyPart[Math.floor(Math.random() * randomAnimalBodyPart.length)];

let insult = "Your " + selectedBodyPart + " is more " + selectedAdjective + " than a " + selectedAnimal + " "+ selectedAnimalBodyPart;
let insultTwo = ["Your", selectedBodyPart, "is more", selectedAdjective, "than a", selectedAnimal, selectedAnimalBodyPart];

let num = [3, 2, 1];

console.log(insult);
console.log(insultTwo.join(" "));
console.log(num.join(" " + "is bigger than" + " "));