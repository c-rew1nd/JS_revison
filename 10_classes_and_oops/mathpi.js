const d = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(d);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvilable: true,

    orderchai: function(){
        console.log("didnt run");
    }
}

//console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Object.defineProperty(chai, 'name' , {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(key,value);
    }
}