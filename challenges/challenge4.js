//Challenge 4: Even or Odd
//Recieves a max number of values to evaluate if they are even or odd
//Iterates over each value

showType(5);

function showType(limit){
    for(let i = 0; i <= limit; i++)
        i % 2 === 0 ? console.log(i, "EVEN") : console.log(i, "ODD");
}

//End of challenge 4