const { valueAndGrads, log } = require("@tensorflow/tfjs");

const userEmail = "dreekt@gmail.com"

if(userEmail){
    console.log("got user email");
} else{
    console.log("dosen't have a user value");
}

// falsy value 
//-----------------
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// Nan
//-----------------

// truthy value
//-----------------
// "0"
// "false"
// " "
// []
// {}
// function(){} 
// Etc... 
//-----------------

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log(("object is empty"));
}

// NUllish coalescing operator (??): null undefined 

let val1;
//val1 = 5 ?? 10;
val1= null ?? 10 // ?? used for null/undefined value safty check 
val1 = null ?? 10 ?? 15 // in this case the first value i.e; 10 is assigned

// terniary operator

// conditon ? true : false
 
const iceteaprice = 100
iceteaprice >=  80 ? console.log("more than or equal to 80") : console.log("less than 80cc");

