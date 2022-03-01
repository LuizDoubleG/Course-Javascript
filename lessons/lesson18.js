// Template Literal
let message = 'Hi, this is my\n first message';
console.log(message);
message = 'Hi, this is my\n \'first\' message';
console.log(message);
message = 'Hi, this is my\n' + '\'first\' message';
console.log(message);

//https://www.tutorialspoint.com/escape-characters-in-javascript
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
// Object {}
// Boolean true, false
// string '', ""
// Template ``

const anotherMessage = `Hi, this is my 
'first'
message`;
console.log(anotherMessage);
const name = 'Luiz'

otherMessage = 'Hi ' + name + '\n Thanks for inviting me';
console.log(otherMessage);

otherMessage = 
`Hi ${name} 

 Thanks for inviting me

 renember that 2+2 = ${2+2}

 bye`
console.log(otherMessage);


const email = 
`Hi,

Thanks for reading this message

Sincerely, 
Miguel.`;
console.log(email);