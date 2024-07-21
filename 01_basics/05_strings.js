const name = "Dreekt"
const repoCount = 6

console.log(name + " " + repoCount + " value"); // outdated way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpositon

const gameName = new String('GTA 6'); // another way of declaring string (gives length property and various different prototypes i.e methords)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const gameName2 = "GTA-6";
const slicedGameName2 = gameName.substring(0,3);
console.log(slicedGameName2);

const anotherString = gameName.slice(-5,1); // for getting substring in reverse order
console.log(anotherString);


const newString1 = " dreekt   ";

console.log(newString1);
console.log(newString1.trim()); // removes whitespaces in a string from starting and ending also works on lineterminals 
// NOTE - trim has 2 commands trimStart() or trimEnd()

const url = "https://Dreekt.com/dreekt%20seayger";
console.log(url.replace("%20","_"));

console.log(url.includes("dreekt")); // returns true

console.log(gameName2.split("-")); // Output will be ['GTA' , '6']




