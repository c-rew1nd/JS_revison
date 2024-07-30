class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
    this._email = value
    }

    get password(){
        //return this._password.toUpperCase()
        return `${this._password}dreekt`
    }

    set password(value){
        this._password = value
    }
    // constructor is setting the value of password as it is being over written by the set
}

const Dreekt = new User("dreekt@gmail.com" , "123")
console.log(Dreekt.password);
console.log(Dreekt.email);