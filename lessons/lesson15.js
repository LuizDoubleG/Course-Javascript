//Cloning Objects
const cellPhone = {
    brand : 'SAMSUNG',
    screenSize : {
        vertical : 155,
        horizontal : 75
    },
    call : function() {
        console.log("Making phone call...")
    }
}

//const newObject = Object.assign({}, cellPhone);
const newObject = Object.assign({
    batteryCapacity : 6000
}, cellPhone);
console.log(newObject);

const object2 = {...cellPhone}; //spread
console.log(object2);