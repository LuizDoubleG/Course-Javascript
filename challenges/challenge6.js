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