// arrays 

const { log } = require("@tensorflow/tfjs");

const myArr = [1,2,3,4,5]
const myHeros = ["Batman", "Ironman", "Superman"]
const myArr2 =  new Array( 1,2,3,4,5)
console.log(myArr[0]);

// Array Methords

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9) // inserts value at the start
myArr.shift() // removes value form the start of the array
console.log(myArr); 
console.log(myArr.includes(9)); // returns true or false
console.log(myArr.indexOf(9)); // returns -1 if not present

const newArr = myArr.join()
console.log(typeof(newArr)); // returns string

// slice and splice

console.log("A ", myArr);

const  myn1  = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log((myn2));





