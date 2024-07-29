const { log } = require("@tensorflow/tfjs")

function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username ,email,password){
    setUserName.call(this, username) // to hold the reference until the execution of the createUser.
    this.email = email
    this.password = password
}


const chai = new createUser("chai" , "chai@gmail.com", "123")
console.log(chai);
