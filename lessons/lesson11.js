// Loops
// 1.For
for(let i = 0; i < 5; i++){
    console.log('Im Learning',i);
}
for(i = 1; i <= 5; i++){
    if(i%2 !== 0){
        console.log(i);//prints only odd numbers
    }
}

for(i = 5; i >= 0; i--){
    console.log(i);
}

// 2.While loop
i = 5
while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

// 3.Do...While
i = 0
do {
    console.log('typing!');
    i++;
} while (i<10) //typing!
/* difference between while and do...while 
-> do...while always execute the code atleast 1 time before checking if de condition is right
   least used
*/

// 4.For-in (used for iterate(repeat) object properties or array elements)
//object
const person = {
    /*Key*/Name: 'Miguel',/*value*/
    age: 19
};

for (let key in person) {
    console.log(key, person[key]); // Name and age -> key
} // "increments" key untill the end of object indexes

//dot notation -> person.Name (when you know the propertie name) or
//person['Name'] -> prints Name: Miguel age: Miguel (wrong)

const colors = ['Red', 'Blue', 'Green'];

for (let index in colors){
    console.log(index,colors[index]);
}
//0 Red
//1 Blue
//2 Green

// 5.For...of
// iterates upon array itens

for(let color of colors){
    console.log(color);
}
// prints only colors without index
// variable color vanishes 
// E.g.:
/*
for(let datas of person){
    console.log(datas);
}
//Not iterable (not an array)
*/

/* 
my try:
let M = 7
let m = 5

if (M>m){
    console.log(M);
}
else{
    console.log(m);
}
*/