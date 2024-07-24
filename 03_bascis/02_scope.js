let a =300
if(true){
    let a = 10;
    const b =20;
    console.log("Inner a: ",a); // will be printed as 10
    var c= 30; // does not follow scope and thus should not be used
}

console.log(a); // a will be printed as 300 because it follows  a global scope
//console.log(b); // b will not be printed because it is declated in side local scope of IF statement
console.log(c);// only c will be printed

function one(){
    const user = "Dreekt"
    function two(){
        const website = "youtube"
        console.log(username); 
    }
    console.log(website);//wont print
    two()
}
//one()

if (true){
    const username = "dreekt"
    if(username==="dreekt"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);// out of scope
}
console.log(username) ; //out of scope 

// +++++++++++++++++intersting++++++++++++++

function addone (num){
    return num +1
}
addone(5)

addtwo(6)  // will throw error due to hositing
const addtwo = function(num2){ 
    return num2+2
}