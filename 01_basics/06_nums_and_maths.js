// ------------------------------ NUMBERS --------------------------------------- //

const score = 400;
console.log(score); // Otuput => 400

const balance = new Number(9000); // another way to define a number is JS also provides various prototypes and methords
console.log(balance); // Output => [Number: 9000]

console.log(balance.toString().length); // converts to string data type, Output => 3
console.log(balance.toFixed(2)); // Output => 100.00

const otherNumber = 21.6954;
console.log(otherNumber.toPrecision(3)); // returns a string type value ,output => 21.7

const hunderds = 1000000
console.log(hunderds.toLocaleString()); // O/P => 1,000,000; default is by US system
console.log(hunderds.toLocaleString('en-IN')); // O/P => 10,00,000 using Indian Standerd


// -------------------------------- MATHS --------------------------------------- // 

console.log(Math);
console.log(Math.abs(-4)); // converts -VE to +VE; O/P => 4
console.log(Math.round(4.3));
console.log(Math.ceil(4.3)); // O/P => 5
console.log(Math.floor(4.9)); // O/P => 4
console.log(Math.min(4,5,6,3,8));
console.log(Math.max(4,5,6,3,8));

console.log(Math.random()); // returns a random value between zero and one 
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min); // formula to return values btw a given range




 
