// Math:
// Global object
// Not a constructor object, it only has static methods (cosnts)
console.log(Math.PI);
console.log(Math.random()); // != console.log(Math.random)
console.log(Math.max(10,15,2,5,20));
console.log(Math.min(10,15,16,2,5));
console.log(Math.ceil(9.1)); // rounds up
console.log(Math.floor(9.9)); // rounds down
console.log(Math.round(9.5)); // rounds to nearest value
console.log(Math.expm1(1)); // e^1 - 1 = 1.718...
console.log(Math.fround(9.25)); //long int?
console.log(Math.imul(9,3,2)); //27?!?! multiplication + froud, ignores later numbers
console.log(Math.trunc(1.7189084)) // 1 -> returns integer part of a number
// etc.:
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

// (extra tip: when "git commit --amend --no-edit", don't forget to "git add ." before)