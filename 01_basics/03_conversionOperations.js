const { log, log1p } = require("@tensorflow/tfjs");

let score = 33;
let score2= "33abc"
let score3= null 
let score4 = undefined
console.log(typeof(score));

let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4)

console.table([typeof(score), typeof(valueInNumber), typeof (valueInNumber2), valueInNumber4, valueInNumber3, 
    valueInNumber2 /*will give NaN(a string that can't be converted to Number) not a number so can't be use for operations */ ]);  

/* 
Conversions to Nunber

"33" => 33
"dre33" => NaN
true => 1; false => 0
null => 0 
undefined => 
*/

let isLoggedIn = ""
let isLoggedIn2 = "K"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)

console.log(booleanIsLoggedIn);
console.log(booleanIsLoggedIn2);

// 1=> true; 0=> false
// "" => false; "k"=> true

let someNumber = 33;
console.log(someNumber);
console.log(typeof someNumber);
let stringOfsomeNumber = String(someNumber);
console.log(someNumber);
console.log(typeof stringOfsomeNumber);

// ********************************************Operations************************************************ 


let value = 3
let negvalue = -value 
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3); 

let s1= "hello"
let s2 = "Dreekt"
console.log(s1+" "+s2);

console.log("1" + 2);
console.log(1+"2");
console.log("1" + 2 + 2); // if string is first then rest of the line is treated as string 
console.log(2+2+"1"); // if number is first then rest of the line is treated as number until string is encountered

console.log(true);
console.log(+true); // console.log(+true) => 1 , console.log(+"") => 0

