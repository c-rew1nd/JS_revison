// fetch('https://something.com').then().catch().finally()

const { log1p } = require("@tensorflow/tfjs");

const promiseOne = new Promise(function (resolve, reject){
    // do and async task
      //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async two resolved");
})

const promisethree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({firstname: "Dreekt", lastname:"Seayger"})
    },1000)
})

promisethree.then(function(username){
    console.log(username);
})

const promisefour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = false
        if(!error){
        resolve({user: "Dreekt", pasaword:"123"})
        } else {
            reject("Error: Something went wrong")
        }
    },1000)
})

promisefour.then(function(username){
    console.log(username);
    return username.user
}).then((user) =>{
    console.log(user);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("the promise is either resolved or rejected");
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
        resolve({langname : "java", pasaword:"123"})
        } else {
            reject("Error: JS went wrong")
        }
    },1000)
})

async function consunePromiseFive(){ // cannot handle error directly
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
       console.log(error); 
    }
}
consunePromiseFive()

// async function getallusers(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() // .json takes time so it needs to be awaited too
//     data.forEach(user => {
//         console.log(user.name);
//     });
//     } catch (error){
//         console.log("E: ",error);
//     }
// }
// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data);})
.catch((error) => {console.log(error);})

