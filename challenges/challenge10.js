// Address assembler

// Objective: create an adress object that contains:
// Street
// City
// Postal Code 
// showAddress(address)

function createAdress(street,city,postalCode) {
    return { 
    street,
    city,
    postalCode,
    showAddress () {
        console.log(`
      Address-> 
      Street: ${street}
      City: ${city}
      Postal Code: ${postalCode}`)
    }
    }
};

let address1 = createAdress('Rua Saquarema', 'Rio de Janeiro',28930970);
console.log(address1);
address1.showAddress();
//or
 showAddress(address1); // Tip: The function call can be placed before the function declaration in JavaScript
function showAddress (address) /* "=" is only for objects*/{
    console.log(`
     Address-> 
     Street: ${address.street}
     City: ${address.city}
     Postal Code: ${address.postalCode}
     `)
}
//or 
function showAddress2(address) {
    for (let key in address)
        if (typeof(address[key]) != 'function')
        console.log(key, address[key]); //Doesn't accept two console.log
}
showAddress2(address1);