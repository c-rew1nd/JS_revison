const { log } = require("@tensorflow/tfjs");

function sayMyName(){
    console.log("D");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("K");
    console.log("T");
}

sayMyName()

function add_two_numbers(num1,num2){
    return (num1+num2);
}

const result = add_two_numbers(3,4);
console.log(result);

function loginusermessage (username = "DemoUser"){ // will show demouser unless new value is assinged
    if(username === undefined){console.log("Please enter a username"); return}
    return  `${username} just logged in`; 
}

console.log(loginusermessage("Dreekt"));
console.log(loginusermessage()); // return undefined

function calculateCartPrice(var1, var2, ...costofitems){ // rest or spread operator
    return costofitems
}

console.log(calculateCartPrice(1212,3434,54,7656));

const user = {
    username: "Dreekt",
    age: 29
}

function handleobject (anyobject){
    console.log(`Username is ${anyobject.username} and Age is ${anyobject.age}`);
}


//handleobject(user)
handleobject({
    username: "Sam",
    age : 29
})

const myNewArray = [200,56,45,4,44]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,56,45,4,44]));