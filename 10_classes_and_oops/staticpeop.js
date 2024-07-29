class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: 4()`);
    }

    static createId(){
        return '123'
    }
}

const dreekt = new User("Dreekt")
console.log(dreekt.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "i@phone.com")
console.log( iphone.logMe() );

