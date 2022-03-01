// Date
const date1 = new Date(); 
console.log(date1);
let date2 = new Date('February 28 2022 04:07'); 
console.log(date2);

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const date3 = new Date(2022,0,15,9,45); //january === 0 december === -1 or 11
console.log(date3);

//data3.getDate extracts date info
date3.setFullYear(2030); //change date info
console.log(date3);

// Convert date to string
console.log(typeof(date2));
date2.toDateString();
console.log(typeof(date2)); // this convertion doesn't work
console.log(typeof(date2.toDateString())); // this works
console.log(typeof(date2.toDateString)); // function
console.log(date2.toDateString()); // Mon Feb 28 2022
console.log(date2.toTimeString()); // 04:07:00 GMT-0300 (Horário Padrão de Brasília)
console.log(date2.toISOString()); // data bank format -> ideal for client-to-server transfer
