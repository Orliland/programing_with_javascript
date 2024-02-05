// let keyword

// 1. We CANNOT access a let variable before we declare it
console.log(user); // Error!
// let user;

// 2. We CAN declare an unassigned variable with let
let user;
console.log(user);

// 3. We CANNOT redeclare a let variable
// let user = "Anna";

// 4. We CAN reassign a let variable
user = "Anna";
console.log(user);
