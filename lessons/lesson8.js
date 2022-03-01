function multiplyByTwo(value){
     return value* 2;
};

console.log(multiplyByTwo(7)); //we used console.log because the function multiplyByTwo doesn't print anything only return values!

let result = multiplyByTwo(12);

console.log(result);

// Arithmetic operators
// + , - , * , / , ** (exponential ex.:2^2)
// ++ -- (order is important):
// console.log(age++); = 18
// console.log(age); = 19
// console.log(--age); = 18

// Atribution
// = , += 
// age += age; = 36

// Comparison
// return false or true
// class -> equality

// sub class-> strict equality:
console.log (1===2); // false
console.log (1===1); // only true
console.log ('1'===1); // false

// sub class-> abstract equality:
console.log(1==1); // true
console.log('1' == 1); //true (complex convertion not recommended to use)


// Ternary operator

let score = 101;
let typeClient = score > 100 ? 'premium' : 'common';
console.log(typeClient);


// Logic
// and (&&)
let age = 17;
let major = age >= 18; 
let hasWorkCard = true;
let canJoinJob = major && hasWorkCard;
console.log(canJoinJob);

// or (||)
age = 17;
major = age >= 18; 
hasWorkCard = true;
canJoinJob = major || hasWorkCard;
console.log('Can apply for the job: ',canJoinJob);

// Not (!)
let applicantRefused = !canJoinJob;
console.log('Applicant Refused: ', applicantRefused);


// Non-boolean comparison 
/*  Falsy
    undefined
    null
    0
    false
    '' (empty string)
    NaN - not a number (invalid results in mathematical calculations)
*/

/* Truthy
    Not Falsy values
    false || 'Luiz' -> "Luiz"
    false || 1 -> 1
    false || 1 || 3 -> 1 (only first comparison outputs)
    (outputs first truthy value)
    example:
*/


let customizedColor = 'Red';
let defaultColor = 'Blue';
let profileColor = customizedColor || defaultColor; //(defines profileColor by wich truthy value comes first)
console.log(profileColor); // -> Red

customizedColor = '';
profileColor = customizedColor || defaultColor;
console.log(profileColor); // -> Blue
