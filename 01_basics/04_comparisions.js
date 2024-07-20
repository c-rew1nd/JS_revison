// basic comparisions
// ---------------------------------------------------------------------- / /

console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

// ---------------------------------------------------------------------- / /

console.log("2" > 1); // console.log("2" + 1) => true // JS automatically converts "2" into number 2

// PS: comparions or equality checks that include null or undefined should be avoided due to inconsistancy in JS

console.table([null > 0 , null == 0, null >=0]); // Output => False, False, True( this is because comparisin and equality work diffrently
 // comparision operators convert null to number thus treating it as 0)
 
 console.log(undefined >=0); // always gives false (comparision)
 console.log(undefined == 0); // always  gives false (equality)

 // ===  not only checks values but also checks data type if both are equal returns true else false

 console.log("2" == 2); // returns true
 console.log("2" === 2); // returns false




