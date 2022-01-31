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
    siteColor = hue + color; // concatenates
}; //function end with ;

console.log(siteColor);
resetColor("bright"," red"); // only with red -> redundefined
console.log(siteColor);


//empty functions only prints
//functions can use return commands

function printName(){
    console.log('Miguel');
};

printName();

function multiplyByTwo(value){
    return value* 2;
};

console.log(multiplyByTwo(7)); //we used console.log because the function multiplyByTwo doesn't print anything only return values!

let result = multiplyByTwo(12);

console.log(result);