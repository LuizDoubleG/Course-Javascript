//Challenge 3:
//Math.Floor() -> round down floating numbers

//Speedometer project:
/* Max speed up to 70km
   For every 5km over the limit, earns 1 point (penalty)
   Reaching 12 points -> "suspended license"
*/

checkSpeed(125);

function checkSpeed(speed){
    const maxSpeed = 70;
    const minSpeed = 35;
    const kmForPenaulties = 5;
    if (speed < minSpeed) //magic value -> hard do comprehend and fix
        console.log("fined");

    if (speed < maxSpeed) //magic value
        console.log("acceptable speed");
    
    else{
        const penalties = Math.floor((speed - maxSpeed) / kmForPenaulties);
        const maxPenalties = 12;
        penalties >= maxPenalties ? console.log("Driver's licence suspended ") : console.log('Penalties: ', penalties);
    }
}
//End of challenge 3