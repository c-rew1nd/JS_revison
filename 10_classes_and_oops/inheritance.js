const { log } = require("@tensorflow/tfjs");

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`the user name is: ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course was added by: ${this.username}`);
    }
}

const chai = new teacher("chai","chai@gmail.com", "123")
chai.addCourse();

chai.addCourse()
const masalaChai = new User("masalac chai")

masalaChai.logMe()

console.log(chai instanceof User);


 