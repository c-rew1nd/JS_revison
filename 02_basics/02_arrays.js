const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//let arr1 = marvel_heros.push(dc_heros)

//console.log(arr1) //  returns array inside array
let arr2= marvel_heros.concat(dc_heros);
console.log(arr2);

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Dreekt"))
console.log(Array.from("Dreekt"))// converts to array
console.log(Array.from({name: "Dreekt"})); // returns [] as cannot convert directly

let score1 = 100
let score2 = 200
let score3 = 300
console.log((Array.of(score1,score2,score3)));
