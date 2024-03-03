let user = prompt("What is your name?");
//alert(`Hello ${user}!`);

if (user === null) {
  alert("You cancelled");
} else {
  alert(`Hello ${user}`);
};