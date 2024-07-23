// singleton 
// Object.create

// object literals 

const syn1 = Symbol("key1") // cannot use directy in object 


const JsUser = {
    name : "Dreekt",
    "full name" : "Dreekt Seayger",
    [sym1] : "myKey1",
    age  : 24,
    location : "Delhi",
    email : "123@gmai.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);
//console.log(JsUser.fullname); // won't work
console.log(JsUser["full name"]);
console.log(JsUser[syn1]);

JsUser.email  = "dreektseayger@gmail.com"
//Object.freeze(JsUser) // won't to able to make any changes to the object after this 
JsUser.greeting = function(){
    this.location("Hello Js user")
}
JsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
