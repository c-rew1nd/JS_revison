let name =  "dreekt"

console.log(name.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower={
    thor : "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
}
Array.prototype.heydreekt = function (){
    console.log("dreekt says hello");
}
Array 
//heroPower.hitesh()
 myHeros.hitesh()
 myHeros.heydreekt()
 //heroPower.heydreekt()

 const user = {
    name: "chai",
    email:"chai@google.com"
 }

 const Teacher = {
    makeVedio: true
 }

 const TeacherSupport = {
    isAvilable: false 
 }

 const TASupport ={
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeacherSupport
 }

Teacher.__proto__ = user

// mordern Syntax

Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUserName = "ChaiAurCode     "
String.prototype.trueLength = function(){
    //console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserName.trueLength()
