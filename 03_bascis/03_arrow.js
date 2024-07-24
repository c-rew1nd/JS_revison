const user ={
    username : "Dreekt",
    price: 29,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`); // this=> used to acces the keyword in the current scope(user)
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // returns {} empty , not in browser tho, in browser it returns the global object that is windows

function chai() {
    let username ="Dreekt"
    console.log(this.username); // returns undefined, this proves this only workes inside object
    console.log(this); // returns a lot of things inside a fucntion 
}
chai()

const chai = function () {
    let username = "dreekt"
    console.log(thiss.username); // returns undefined
}
chai() 

const chai = () => { // arrow function
    let username = "dreekt"
    console.log(this.username);
}
chai()

const addtwo = (n1,n2) => {
    return n1+n2 //explicit return 
}

console.log(addtwo(n1,n2));

//const add_three = (num1,num2,num3) => (num1+num2+num3) // implicit return (where we are not required to use the return keyword)
const add_three = (num1,num2,num3) => ({username: "Dreekt"})
console.log(add_three(3,4,5));
