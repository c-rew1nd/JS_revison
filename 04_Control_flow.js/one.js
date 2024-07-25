// if 
const temp = 41

if(temp===41){ // the code will execute else not
    console.log("temperatue less than fifty");
}
else{
    console.log("the temperature is greater than 50");
}
// <,>,<=,>=,==,!=,===,!==

const score = 200
if(score >100){
    const power = "fly"
    console.log(`user power ${power}`);
}

const userLoggedIn = true
const debitcard = true
const logged_in_from_google= true
const logged_in_from_facebook = true 
if (userLoggedIn && debitcard){
    console.log("allowed to buy courses");
}

if (logged_in_from_facebook || logged_in_from_google){
    console.log("User Logged In");
}




