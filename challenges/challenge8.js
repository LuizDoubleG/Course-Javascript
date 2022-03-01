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