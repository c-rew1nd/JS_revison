const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

let arr1 = marvel_heros.push(dc_heros)

//console.log(arr1) //  returns array inside array
arr1 = marvel_heros.concat(dc_heros);
console.log(arr1);
