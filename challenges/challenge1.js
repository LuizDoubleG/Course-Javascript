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