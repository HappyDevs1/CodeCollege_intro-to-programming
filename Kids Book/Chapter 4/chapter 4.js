
/*let cat = {
  legs : 3,
  "full name" : "Harmonny",
  color : "Tortoiseshell"
};
console.log(cat["full name"]);
console.log(cat["color"]);
console.log(cat.color);

let dog = {
  name : "Pancake",
  age : "6",
  color : "white",
  bark : "Yip Yap Yip"
};
console.log(Object.keys(cat));


let dinosaurs = [
  {name: "Trynnosaurus Rex", period: "Late Cretaceous"},
  {name: "Stegosaurus", period: "Late Jusassic"},
  {name: "Plateosaurus", period: "Triassic"}
];
console.log(dinosaurs[0]);
console.log(dinosaurs[0].name);
console.log(dinosaurs[1].period);
console.log(dinosaurs[2].name);


let friends = [
  {name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16]},
  {name: "Dave", age: 5, luckyNumbers: [3, 9, 40]},
  {name: "Kate", age: 9, luckyNumbers: [1, 2, 3]}
];

console.log(friends);
console.log(friends[1].luckyNumbers[2]);

let owedMoney = {};
owedMoney.Jimmy = 5;
owedMoney.Anna = 7;

console.log(owedMoney.Jimmy);
console.log(owedMoney.Jinen);
console.log(owedMoney.Anna);
owedMoney.Jimmy += 3;

console.log(owedMoney.Jimmy);

//Movie Info
let movies = {
  "Finding Nemo" : {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
      releaseDate: 2005,
      duration: 157,
      actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      format: "Blu-ray"
      }
};

console.log(movies["Star Wars: Episode VI - Return of the Jedi"].actors[2]);

let cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blue-ray"
};
movies["Cars"] = cars;
Object.keys(movies);
console.log(movies);
*/

//SCOREKEEPER CHALLENGE
let scoreKeeper = [
  {name: "Happy", score: 0},
  {name: "Steve", score: 0},
  {name: "Alex", score: 0}
];

scoreKeeper[1].score += 2;
console.log(scoreKeeper[1].score);

let myCrazyObject = {
  "name": "A ridiculous object",
  "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
  "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number);