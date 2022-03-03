// Introduction to Arrays
// Finding elements (reference values)

const bands = [
    {id:1 , name: 'Lacosta'}, 
    {id:2 , name: 'Nice'} // Alt+Shifht+↓
]; 

console.log(bands.includes({id:1 , name: 'Gabriel'})); // False -> Objects have different references
// That is, it doesn't work in this case
// Use: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

var array1 = [1,27,10,9,2];
console.log(array1.find(function(element) { // Prints: 27
    return element > 9;
})); // Return first element that matches the element passed, else returns undefined

//or

console.log(array1.find(element => element > 10)); // Prints: 27

// Applying this in the first example:

console.log(bands.find(function(band){
    return band.name === 'Nice'; 
})); // Prints: {id: 2, name: 'Nice'}

// or

const band = bands.find(function(band){
    return band.name === 'Lacosta'; 
});
console.log(band); // Prints: {id: 1, name: 'Lacosta'}