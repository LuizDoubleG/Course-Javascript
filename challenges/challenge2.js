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