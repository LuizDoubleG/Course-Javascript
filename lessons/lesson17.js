//Strings
//Primitive type:
/*const*/ let message = '   my first message   ';
//Object type:
const anotherMessage = new String('Good Morning!');

console.log(typeof message); //"string"
console.log(typeof anotherMessage); //"object"

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

console.log(anotherMessage.length);// 13
console.log(anotherMessage[2]);// o
console.log(message.includes('first'));// true // string turns into object to execute the command (because JavaScript is dynamic)
console.log(message.startsWith('my'));// true
console.log(message.endsWith('message'));// true
console.log(message.indexOf('first'));// 3 -> word starts at the 3th index
console.log(message.replace('my', 'your'));
console.log(message); //my first message -> previous message.replace 
//doesn't change the message definitively, because it is inside a console.log

console.log(message.trim());
//or 
message = message.trim();
console.log(message); // change it definitively
console.log(message.split(' ')); // breaks string into keys and values
