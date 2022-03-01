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

 function printName(){
     console.log('Miguel');
 };

printName();
