// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) 
// USED TO PROTECT AGAINST THE POLLUTION FROM GLOBAL VARIABLE

(function chai(){ // named IIFE
    console.log('DATABASE CONNECTED');
})();

( ()=>{ // simple IIFE
    console.log('DATABASE CONNECTED TWO');
})();

( (name)=>{
    console.log(`Welcome ${name}`);
})("Dreekt"); 

