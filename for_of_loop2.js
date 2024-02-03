const car = {
  engine: true,
};

const sportCar = Object.create(car);
sportCar.speed = "fast";
console.log("The sportCar object: ", sportCar);

for (prop in sportCar) {
  console.log(prop);
}

for (prop of Object.keys(sportCar)) {
  console.log(prop + ": " + sportCar[prop]);
}
