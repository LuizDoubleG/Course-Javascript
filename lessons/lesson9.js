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


let time = 13;

if (time >= 6 && time < 12) {
    console.log("Good morning!");
}
else if (time >= 12 && time < 18){
    console.log("Good afternoon!");
}
else{
    console.log("Good night!");
}
