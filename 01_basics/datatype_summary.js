//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// -----------------------------------------------------------------

//  Stack (Pimitive(call by value(copy of actual data))),  Heap(NonPrimitive(call by referance(actual data)))

let myName = "Dreekt"
let anotherName = myName 
anotherName = "Seayger"
console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "user2@gmail.com" 
console.log(user1.email); // value of user1.email changed after changing the value in user2.email is because user2 is referred to user1 and any changes made in user2 will also be a change for user1 due to call by reference
