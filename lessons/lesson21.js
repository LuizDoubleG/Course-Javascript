// Introduction to Arrays
// Finding elements (primitive values)
// Difference between primitive and reference values:
// https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
const numbers = [1,2,3,2,4];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(5)); // -1 = doesn't exist
console.log(numbers.indexOf('1')); // -1
console.log(numbers.lastIndexOf(2)); // 3 

console.log(numbers.indexOf(4) !== -1); // true = 4 exists inside the array

//or 
//S6 simpler form

console.log(numbers.includes(2));
