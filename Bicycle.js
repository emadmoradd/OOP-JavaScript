// Bicycle.js
import Vehicle from "./Vehicle.js";

class Bicycle extends Vehicle {
    constructor(color = "blue") {
        super(color, 2, "honk honk"); // Override the default values
    }
}

export default Bicycle;
