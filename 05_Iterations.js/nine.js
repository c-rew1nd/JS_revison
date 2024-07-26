const myNums = [1,2,3,4,5]

// let t = myNums.reduce(function (acc,curval) {
//     console.log(`acc:${acc} and curval:${curval}`);
// return acc+curval;
// },0)

t = myNums.reduce((acc,curval) => acc+curval,0)
console.log(t);

const shoppingCart = [
    {
        itemName : "js course",
        price: "2999"
    },
    {
        itemName : "node.js course",
        price: "4999"
    },
    {
        itemName : "react course",
        price: "12999"
    }
]

let total = shoppingCart.reduce((acc,item)=> acc + Number(item.price),0)
console.log(total);