//const tinderUser =  new Object() // singleton object 
const tinderUser = {} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "sammy@gmail.com",
    fullname : {
        user_full_name: {
            first_name: "Dreekt",
            Last_name: "Seayger"
        }
    }
}

//console.log(regularUser.fullname.user_full_name.first_name);
 
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
//const obj3 = {obj1,obj2}
//console.log(obj3); //=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj4 = Object.assign({}, obj1,obj2) //  {}-> acts as target and rest act as source all the values go in {} isnted of obj1 
//console.log(obj4); //=>{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 ={...obj1,...obj2} // using spread operator
console.log(obj5);

const users = [
    {
        id : 1,
        email : "hd@gmail.com"
    },
    {
        id : 2,
        email : "gc@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course ={
    coursename : "js revision",
    price: "999",
    courseInstructor: "Dreekt"
}
 
const {courseInstructor: instructor} = course // renaiming courseinstructor as instructor (de-structring)
console.log(instructornstructor);

// ----- JSON -------

/*{
    "name" : "Dreekt",
    "CourseName" : "JS Rev"
    "price" : "free"
} */
// use json formator for API 