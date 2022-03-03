// Introduction to Arrays
// Adding elements

const numbers = [1,2,3];

// Start
numbers.unshift(0); // Puts 0 at the 0 index
console.log(numbers); //[0,1,2,3]

// Middle
numbers.splice(1,0,'a');
console.log(numbers); //[0,'a',1,2,3]
numbers.splice(1,3);
console.log(numbers); //[0, 3]

// End
numbers.push(4);
console.log(numbers); //[0,3,4]

// It works even if the array is of the const type