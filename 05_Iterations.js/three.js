// for of

const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val);
}

const greet = "hello world"
for(const g of greet){
    console.log(g);
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "AMERICA")
map.set("FR", "FRANCE")
//console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}

// object

const game = {
    "game" : "nfs",
    "game2" : "spiderman"
}

// for(const [i,j] of game){
//     console.log([i,": ",j]);
// }