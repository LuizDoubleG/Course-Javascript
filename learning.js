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
/*
let siteColor = "blue";

function resetColor(hue, color){ //() <- parameters
    siteColor = hue + color; //concatenates
}; //function end with ;

console.log(siteColor);
resetColor("bright"," red"); // only with red -> redundefined
console.log(siteColor);
*/

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
// sub class-> abstract equality:
console.log(1==1); // true
console.log('1' == 1); //true (complex convertion not recommended to use)
*/

// Ternary operator
/*
let score = 101;
let typeClient = score > 100 ? 'premium' : 'common';
console.log(typeClient);
*/

// Logic
// and (&&)
/*
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
*/

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

/*
let customizedColor = 'Red';
let defaultColor = 'Blue';
let profileColor = customizedColor || defaultColor; //(defines profileColor by wich truthy value comes first)
console.log(profileColor); // -> Red

customizedColor = '';
profileColor = customizedColor || defaultColor;
console.log(profileColor); // -> Blue
*/

// If..Else
// If time is between 06:00 untill 12:00 = Good morning!
// If time is between 12:00 untill 18:00 = Good afternoon!
// Else = Good night!

/* if (condition) {
    script to be executed
}
else if (anotherCondition){
    script to be executed
}
else {
    script to be executed
}
*/

/*
let time = 5;

if (time >= 6 && time < 12) {
    console.log("Good morning!");
}
else if (time >= 12 && time < 18){
    console.log("Good afternoon!");
}
else{
    console.log("Good night!");
}
*/

//switch case
 /* switch (variable){
    case (condition):
         execute script
    break; (to exit condition comparison) 
 }
 */
/*
let permission;
permission = 'manager'
switch (permission){
    case 'default':
        console.log('Default User');
    break;

    case 'manager':
        console.log('Manager User');
    break;

    case 'principal':
        console.log('Principal User');
    break;

    default:
        console.log('Undefined User');
}
*/
// Loops
// 1.For
for(let i = 0; i < 5; i++){
    console.log('Im Learning',i);
}
for(i = 1; i <= 5; i++){
    if(i%2 !== 0){
        console.log(i);//prints only odd numbers
    }
}

for(i = 5; i >= 0; i--){
    console.log(i);
}

// 2.While loop
i = 5
while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

// 3.Do...While
i = 0
do {
    console.log('typing!');
    i++;
} while (i<10) //typing!
/* difference between while and do...while 
-> do...while always execute the code atleast 1 time before checking if de condition is right
   least used
*/

// 4.For-in (used for iterate(repeat) object properties or array elements)
//object
const person = {
    /*Key*/Name: 'Miguel',/*value*/
    age: 19
};

for (let key in person) {
    console.log(key, person[key]); // Name and age -> key
} // "increments" key untill the end of object indexes

//dot notation -> person.Name (when you know the propertie name) or
//person['Name'] -> prints Name: Miguel age: Miguel (wrong)

const colors = ['Red', 'Blue', 'Green'];

for (let index in colors){
    console.log(index,colors[index]);
}
//0 Red
//1 Blue
//2 Green

// 5.For...of
// iterates upon array itens

for(let color of colors){
    console.log(color);
}
// prints only colors without index
// variable color vanishes 
// E.g.:
/*
for(let datas of person){
    console.log(datas);
}
//Not iterable (not an array)
*/

/* 
my try:
let M = 7
let m = 5

if (M>m){
    console.log(M);
}
else{
    console.log(m);
}
*/
// better:
let higherNumber = max(5,7); //even equal numbers work
console.log(higherNumber);
//doesn't metter if the function is declared after being called

function max(number1, number2){
    /*if(number1 > number2)
        return number1;
    else return number2;
    //doesn't need braces
    */

    /*
    if(number1 > number2)
        return number1; //if condition is true, exit after script, if not executes script after this operator scope 
    return number2;
    //doesn't need braces
    */
    
    return number1>number2 ? number1:number2;
    //ternary operator
}

// fizzBuzz -> function
/* 
compares values and return:
Fizz => if divisible by 3
Buzz => if divisible by 5
FizzBuzz => if divisible by 3 and 5
The typed value itself => not devisible by 3 nor 5
'Not a number' => if the typed input is not a number
*/
const result = fizzBuzz(45);//const => doesn't change through script not because it has a number input
console.log(result);
/*
function fizzBuzz(input){
    switch(true){//executes going over false cases until a true case breaks the switch 
        case (input%3===0 && input%5===0):
            return ('FizzBuzz');
        break;
        case (input%3===0):
            return ('Fizz');
        break;
        case (input%5===0):
            return ('Buzz');
        break;
        case (typeof input===typeof 0):
            return (input);
        break;
        default:
            return ('Not a number');
    }
}
*/
//can I make it more clean with ternary operators?

function fizzBuzz(input){
//    input%3===0 && input%5===0 ? 'FizzBuzz' : ; doesn't fit in this case
    if (input instanceof Number){ //important: instanceof structure => https://flexiple.com/instanceof-javascript/#:~:text=Other%20Related%20Concepts-,What%20is%20Instanceof%3F,false%20then%20it%20is%20not. 
    // or (typeof input !== 'number') more legible 
    // this verification should've been the first one
        return (input);
    }    
    if (input%3===0 && input%5===0){
        return ('FizzBuzz');
    }
    /*else*/ if (input%3===0){
        return ('Fizz');
    }
    /*else*/ if (input%5===0){
        return('Buzz');
    }
    //else{
        return ('Not a number');
    //}
}

//Math.Floor() -> round down floating numbers

//Speedometer project:
/* Max speed up to 70km
   For every 5km over the limit, earns 1 point (penalty)
   Reaching 12 points -> "suspended license"
*/

checkSpeed(125);

function checkSpeed(speed){
    const maxSpeed = 70;
    const minSpeed = 35;
    const kmForPenaulties = 5;
    if (speed < minSpeed){ //magic value -> hard do comprehend and fix
        console.log("fined");
    }
    if (speed < maxSpeed){ //magic value
        console.log("acceptable speed");
    }
    else {
        const penalties = Math.floor((speed - maxSpeed) / kmForPenaulties);
        const maxPenalties = 12;
        penalties >= maxPenalties ? console.log("Driver's licence suspended ") : console.log('Penalties: ', penalties);
    }
}


// Bitwise
