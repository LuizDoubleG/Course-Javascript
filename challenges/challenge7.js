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