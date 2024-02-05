// var keyword

// 1. We CAN access a var variable before initialization...
/// ... as long as the variable is EVENTUALLY INITIALIZED
/// ... ANYWHERE in our code
console.log(user);

// 2. We CAN declare and redeclare the same var variable without errors
var user = "Mary";
var user = "John";
var user = "Jane";
console.log(user);

var user;
