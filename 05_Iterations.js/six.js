//const coding = ["js","ruby","java","python","cpp"]

// const c = coding.forEach((item)=> {
//     return (item) // for each returns undefined
// })

const num = [1,2,3,4,5,6,7,8,9,10]

let newnum = num.filter((n) => num > 4)
console.log(newnum);

let newnu= num.filter((n) => {return num > 4})
console.log(newnu); // returns [] so we  need to use return keywords

const  nnum =[]

num.forEach((num)=> {
    if (num > 4) {
        nnum.push(num)
    }
}) 
console.log(nnum);