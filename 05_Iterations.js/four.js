const myObj = {
    js: "javascript",
    cpp: "c++",
    rb : "ruby",
    swift:"swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "AMERICA")
// map.set("FR", "FRANCE")

// for (const key in map) {
//     console.log(key);  // map is non iterable 
// }

