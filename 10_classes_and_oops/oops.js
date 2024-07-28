const user = {
    username : "dreekt",
    loginCount: 8,
    signedIn: true,
    
    getuserDetails: function () {
        console.log("Got user details from the database");
        console.log(this);
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getuserDetails());
console.log(this); // returns {} on editor but window object on browser

// new is a constructor function 
// eg: const arr = new Promise();

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings  = function(){
        console.log((`Welcome ${this.username}`));
    }
    return this
}

const userOne = new User("dreekt" ,11 , true)
const userTwo = new User("Chai aur code" , 12 , false) // all values will be overwritten
console.log(userOne.constructor);
console.log(userOne);

