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