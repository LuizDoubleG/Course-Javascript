// Equality of objects
// Equality of properties and memory address

function Address(street,city,postalCode) {
    this.street = street,
    this.city = city,
    this.postalCode = postalCode,
    this.showAddress = function () {
    console.log(`
      Address-> 
      Street: ${this.street}
      City: ${this.city}
      Postal Code: ${this.postalCode}`)
    }
};

const address1 = new Address('Rua Saquarema', 'Rio de Janeiro',28930970); 
const address2 = new Address('Rua Gentil Oscar', 'Tatuí', 18272518); 

const {street, ...address3} = address2 // Clone address2 without street propertie
console.log(address3);

console.log(areAddressEqual(address2,address3)); //false
console.log(areAddressEqual(address1,address2)); //false

const address4 = {...address1};
console.log(areAddressEqual(address1,address4)); //true

function areAddressEqual(address1, address2) {
    // Compares equality of properties
    let equality = true
    for (let key in address1){
        if (address1[key] != address2[key])
        equality = false
    }
    return equality
}

null != true ? console.log(true) : console.log(false);//false
// null == true -> truthy 

console.log(address2);

function hasEqualMemoryAddress(address1, address2) {
    // Compares equality of memory address
    // Value type != Reference type
    // Objects are of Reference type (pointer)
    return address1 === address2;
}

console.log(hasEqualMemoryAddress(address2, address4)); //false
console.log(hasEqualMemoryAddress(address1, address4)); //false, even though they have equal properties

// However...
// If you copy different object by the following method
// the first will point to the address of the second.

const address5 = address2 
console.log(hasEqualMemoryAddress(address5, address2)); //true