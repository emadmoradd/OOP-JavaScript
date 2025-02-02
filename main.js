import Vehicle from "./Vehicle.js";
import Bicycle from "./Bicycle.js";

const car = new Vehicle();
console.log(`Car: ${car.color}, Wheels: ${car.numberOfWheels}`);
car.honkHorn(); 

const bike = new Bicycle();
console.log(`Bike: ${bike.color}, Wheels: ${bike.numberOfWheels}`);
bike.honkHorn(); 

