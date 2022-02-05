// /*var*/
// const age = 7; /*;*/
// console.log(age);
// console.log('stuff');
// //camelCase
// //ctrl+; comments all selected
// /*const = constant doesn't change -> error  
// while trying to change the valor*/
// let Name = 'Luiz'; // string literal
// console.log(Name);
// let age = 19.6; // number literal
// console.log(age);
// let aprovation = true; //boolean
// console.log(aprovation);
// let secondName; // Undefined default
// let secondName = undefined -> less used
// let selectedColor = null // redefine a value
// null = resettable
// so, what's on front of a variable defines it
// javascript types are dynamic 
//change

//objects:

/*
let person = {
    Name: 'Luiz',
    age: 19,
    aprovation: true,
    secondName: 'Miguel'
};
*/

//Arrays -> united data acessed by index

/*
let family = [19,51,'stuff',true,49,9];
//console.log(family[3]);
console.log(family.length);

let friend = ['Rafael',19,'Rio de Janeiro'];
console.log(friend);
*/

//create functions (extructure): Verb + Substantive

let siteColor = "blue";

function resetColor(hue, color){ //() <- parameters
    siteColor = hue + color; //concatenates
}; //function end with ;

console.log(siteColor);
resetColor("bright"," red"); // only with red -> redundefined
console.log(siteColor);


//empty functions only prints
//functions can use return commands

// function printName(){
//     console.log('Miguel');
// };

// printName();

// function multiplyByTwo(value){
//     return value* 2;
// };

// console.log(multiplyByTwo(7)); //we used console.log because the function multiplyByTwo doesn't print anything only return values!

// let result = multiplyByTwo(12);

// console.log(result);

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
/*console.log (1===2); // false
console.log (1===1); // only true
console.log ('1'===1); // false
// sub class-> loose equality:
console.log(1==1); // true
console.log('1' == 1); //true (complex convertion not recommended to use)
*/

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

// Bitwise

