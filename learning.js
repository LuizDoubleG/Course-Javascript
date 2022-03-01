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

//Challenge 1:
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
//End of challenge 1

//Challenge 2:
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
    if (input instanceof Number) //important: instanceof structure => https://flexiple.com/instanceof-javascript/#:~:text=Other%20Related%20Concepts-,What%20is%20Instanceof%3F,false%20then%20it%20is%20not. 
    // or (typeof input !== 'number') more legible 
    // this verification should've been the first one
        return (input);
    
    if (input%3===0 && input%5===0)
        return ('FizzBuzz');
    
    /*else*/ if (input%3===0)
        return ('Fizz');
    
    /*else*/ if (input%5===0)
        return('Buzz');
    
    //else{
        return ('Not a number');
    //}
    //The right sequence reduces the need of eleses
    //because the progam will stop when it returns a value
}
//End of challenge 2

//Challenge 3:
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
    if (speed < minSpeed) //magic value -> hard do comprehend and fix
        console.log("fined");

    if (speed < maxSpeed) //magic value
        console.log("acceptable speed");
    
    else{
        const penalties = Math.floor((speed - maxSpeed) / kmForPenaulties);
        const maxPenalties = 12;
        penalties >= maxPenalties ? console.log("Driver's licence suspended ") : console.log('Penalties: ', penalties);
    }
}
//End of challenge 3

//Challenge 4: Even or Odd
//Recieves a max number of values to evaluate if they are even or odd
//Iterates over each value

showType(5);

function showType(limit){
    for(let i = 0; i <= limit; i++)
        i % 2 === 0 ? console.log(i, "EVEN") : console.log(i, "ODD");
}

//End of challenge 4

//Challenge 5: function that shows object properties 
//(key and value) 
//if value matches 'string' type

const movie = {
    title : 'The Shack',
    year : 2017,
    director : 'Stuart Hazeldine',
    character : 'Mackenzie'
}

showProperties(movie);

function showProperties(obj){
    for (let prop in obj) //iterates over every propertie in object, like an counter
        if (typeof(obj[prop]) === 'string') // selects only 'string' type properties
            console.log(prop, obj[prop]); //show them one at each loop
}

// End of challenge 5 

//Challenge 6: Sum multiples of 3 and 5

sum(10);
function sum(limit){
    let result = 0;
    for(let i = 0; i <= limit; i++){
    i % 3 === 0 ? result += i : i % 5 === 0 ? result += i : null; //usage of null in ternary operations
    }
    console.log(result);
}
//Could've done it with different variables to store 
//the sum of each multiples (of 3 and 5)
//at the end print the sum of these two variables
//I thought two variables was unnecessary

//End of challenge 6

//Challenge 7:
//School grade
//Get average from an array

const array = [70,70,80];

console.log(studentAverage(array));

function studentAverage(grades) {
    /*var average = grades.reduce(function(average, grade){//could've been any variable name instead of "average"
        //"Function" represents the "reduce" function 
        //which uses grade as a pointer to grades object 
        //with a subliminal counter
        //grade (or any name) = grades[i]
        //Reduce and some other array function are a subliminal looped function
        return average + grade; //similar to +=
    },0);
    //others: forEach, map, filter, find, reduce... 
    //are methods of Array.prototype
    //Find more about at: https://warcontent.com/metodos-arrays-javascript/#reduce-javascript
    
    average /= grades.length

    //return (average / grades.length); 
    //only if we want to end here
   */
    const average = calculateAverage(grades);

    return average < 59 ? 'F' :
    average < 69 ? 'D' :
    average < 79 ? 'C' :
    average < 89 ? 'B' :
    'A';

//or
    /*
    if (average < 59) return 'F';
    if (average < 69) return 'D';
    if (average < 79) return 'C';
    if (average < 89) return 'B';
    return 'A';
    */
}

function calculateAverage(array) {
    var average = array.reduce(function(sumOfGrades, grade){
        return sumOfGrades + grade; 
    },0);
    return average /= array.length
}

//or

/*
function calculateAverage(array) {
    var sumOfGrades = 0; //var because it will change its value constantly
    for (var grade of array) {
        sumOfGrades += grade;
    }
return sumOfGrades/(array.length);
}
*/

//We can use F2 to rename all variables with the same name

//End of challenge 7

//Challenge 8: print number of asterisks in each line
//Asterisks will increse by 1 for each line in sequence
//The number of asterisks in a line will match the line number

showAsterisk(10);
function showAsterisk(lines) {
 //   let pattern = '';
//    for(let line = 0; line < lines; line++) {
//        pattern += '*';
//        console.log(pattern);
//    }

    for(let lineCounter = 1; lineCounter <= lines; lineCounter++) {
        let pattern = ''; //resets pattern asterisks to 0
        for(let counter = 0; counter < lineCounter; counter++) {
            //important not to confund lineCounter with lines
            //because it will print 10x a line with 10 asterisks
            pattern += '*';
        }
        //nested loop
    console.log(pattern);
    }
}
//End of challenge 8

//Challenge 9:
//Prints every single Prime Number untill the declaredlimit 
primeNumbers(15);

/*
function checkPrimeNumber(limit) {
    for(var number = 2; number <= limit; number++){
       //Prime numbers starts after 1
        let primeCheck = true;
        for(var divisor = 2; divisor < limit; divisor++){
        //Not "divisor < limit" but "divisor < number"
        // to reduce cost of operation even if it returns the right outcome
        //why divisor = 2 and < and not <=?
        //Because every number is divisible by 1 and itself
        //But only prime numbers are ONLY divisible by 1 and itself
        //This feature neutralizes the need for this following operation:
            
            //if (number % divisor === 0)
                //primeCheck++;
        //}
    //if (primeCheck === 2)
    //console.log(number);
    //}
    
        if (number % divisor === 0)
            primeCheck = false;
            break;
        // Don't use braces({}) here, because it will stop 
        //only the function "if" but not the "for" loop
        }
    if (primeCheck) console.log(number);
    }
}
*/

//It's better that a function plays only one role

function primeNumbers(limit) {
    for(var number = 2; number <= limit; number++){
       if (checkPrimeNumber(number)) console.log(number);
    }
}
function checkPrimeNumber(number) {
    for(var divisor = 2; divisor < number; divisor++){
    //    
        if (number % divisor === 0)
           return false;
    }
    return true;
} 
//End of challenge 9

//Lesson 12: Factory functions
//Several objects 
//ex.:
//full object with function and specifications:

//const cellPhone = {
    //brand : 'SAMSUNG',
    //screenSize : {
        //vertical : 155,
        //horizontal : 75
    //},
    //batteryCapacity : 5000,
    //call : function() {
        //console.log("Making phone call...")
    //}
//}

//If we want 100 objects like that, one option is:
//repeat it 100x
//instead:

//function createCellPhone() {
function createCellPhone (brand, screenSize, batteryCapacity) {
    // const cellPhone = {
    //     brand : 'SAMSUNG',
    //     screenSize : {
            //vertical : 155,
            //horizontal : 75
        //},
        //batteryCapacity : 5000,
        //call : function() {
            //console.log("Making phone call...")
        //}
    //}
    //return cellPhone;

    //(tip: comment all = ctrl + ;)
   //or:

    //return {
        //brand : 'SAMSUNG',
        //screenSize : {
            //vertical : 155,
            //horizontal : 75
        //},
        //batteryCapacity : 5000,
        //call : function() {
            //console.log("Making phone call...")
        //}
    //}

    //This is Hard Coding, that means it can't be parameterized
    // it isn't dynamic 
    // but, with function createCellPhone(...,...,...) {
    // and this:

    //return {
        //brand : brand,
        //screenSize : screenSize,
        //batteryCapacity : batteryCapacity,
        //call : function() {
            //console.log("Making phone call...")
        //}
    //}
   //or:
    return {
        brand,
        screenSize,
        batteryCapacity,
        call () {
            console.log("Making phone call...");
        }
    }
    // Now it is dynamic and parameterizable
}
// camelCase -> oneTwoThreeFour
const cellPhone1 = createCellPhone('Xiaomi', 5.5, 5000);
console.log(cellPhone1);


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

// Bitwise