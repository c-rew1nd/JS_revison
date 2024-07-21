// Date 

let myDate = new Date()

 // --- basic date formats --- //
console.log(myDate); //=> 2024-07-21T06:18:10.211Z
console.log(myDate.toString()); //=> Sun Jul 21 2024 11:48:10 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //=> Sun Jul 21 2024
console.log(myDate.toISOString()); //=> 2024-07-21T06:18:10.211Z
console.log(myDate.toJSON()); //=> 2024-07-21T06:18:10.211Z
console.log(myDate.toLocaleDateString()); //=> 7/21/2024
console.log(myDate.toLocaleString()); //=> 7/21/2024, 11:48:10 AM
console.log(myDate.toLocaleTimeString()); //=> 11:48:10 AM
 // -------------------------- //

console.log(typeof myDate); //=> object

let myCreatedDate = new Date(2024,1,23);
console.log(myCreatedDate.toDateString()); //=> Fri Feb 23 2024 (months start from 0 in JS)

let myCreatedDate2 = new Date(2024,1,23 , 5, 3);
console.log(myCreatedDate2.toLocaleString()); //=> 2/23/2024, 5:03:00 AM

let myCreatedDate3 = new Date("2024-01-09");
console.log(myCreatedDate3.toLocaleString()); //=> 1/9/2024, 5:30:00 AM 

// ------------ TimeStamps -------------------- //

let time_stamp = Date.now()

console.log(time_stamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000)); // to get time in seconds


let newDate = new Date()

console.log((newDate.getMonth()+1));
console.log((newDate.getDay()));

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'American/New_York'
});



