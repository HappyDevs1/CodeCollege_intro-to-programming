/*
let name = prompt("What is your name?");
alert(`Hello ${name}, welcome`);

if (name.length > 7) {
  alert("Wow! You have a really long name");
} else {
  alert("Your name is short!")
};

let lemonChicken = confirm("Is there lemon chicken?");
let beefWithBlackBeans = confirm("is there beef with blasck beans?");
let sweetSourPork = confirm("Is there sweet and sour pork?");

if (lemonChicken) {
  alert("Great! I am having lemon chicken");
} else if (beefWithBlackBeans) {
  alert("Cool, I am having been with black beans");
} else if (sweetSourPork) {
  alert("Fine, I will settle for sweet and sour pork");
} else {
  alert("Okay I guess I will have rice")
};

//TRY IT OUT
let name = prompt("What is your name?").toLowerCase();
let me = "happy";
let dad = "jack";
let mom = "sara";

if (name === me) {
  alert("Hi me!");
}  else if (name === dad) {
  alert("Hi dad!");
} else if (name === mom) {
  alert("Hi mom!");
} else {
  alert("Hello stranger!");
};


//LOOPS
let sheepCounted = 0;
while (sheepCounted <= 10) {
  console.log(`I have counted ${sheepCounted} sheep`);
  sheepCounted ++;
};

let sheepCounted = 10;
for (let i = 0; i < sheepCounted; i++) {
console.log(`I have counted ${sheepCounted} sheeps`)
}

let countingStudents = 100;
for (let i = 0, j = 100; i < countingStudents; i++, j--) {
  console.log(`The total number of students are ${countingStudents}`);
};

let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (let i = 0; i < animals.length; i++) {
  alert(`The Zoo contains ${animals[i]}`);
};

let myName = "Nick";
for (let i = 0; i < myName.length; i++) {

}
*/

let input = "Javascript is awesome!";
let output = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    output += "4";
  } else if (input[i] ==="e") {
    output += "3";
  } else if (input[i] === "o") {
    output += 0;
  } else if (input[i] === "i") {
    output += "1";
  } else {
    output += input[i];
  }
};
console.log(output);