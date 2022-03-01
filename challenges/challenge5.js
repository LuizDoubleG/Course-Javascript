//Challenge 5: function that shows object properties 
//(key and value) 
//if value matches 'string' type

const movie = {
    title : 'The Shack',
    year : 2017,
    director : 'Stuart Hazeldine',
    character : 'Mackenzie'
}

showProperties(movie);

function showProperties(obj){
    for (let prop in obj) //iterates over every propertie in object, like an counter
        if (typeof(obj[prop]) === 'string') // selects only 'string' type properties
            console.log(prop, obj[prop]); //show them one at each loop
}

// End of challenge 5 