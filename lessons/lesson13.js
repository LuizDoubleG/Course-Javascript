// Lesson 13: Constructor functions
// Often used in back-end

//Pascal Case - OneTwoThreeFour 
function CellPhone (brand, screenSize, batteryCapacity) {
    this.brand = brand,
    this.screenSize = screenSize,
    this.batteryCapacity = batteryCapacity,
    this.call = function() {
        console.log("Making phone call...");
    }
}

const cellPhone = new CellPhone('ASUS', 5.5,5000);
console.log(cellPhone);
// Difference is the moment that you creat a new object
// In constructor function you create it at the momment that you do "new <FunctionName>"
// In Factory function you create it at the moment that the function returns the object and
// place it at the new variable