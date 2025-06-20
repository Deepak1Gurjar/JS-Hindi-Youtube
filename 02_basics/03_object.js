// Singleton // koi bhi constructor se jab aap bante hai tab ye constructor object banta hai or hamesha singleton object banta hai
// objct.create

// object literals

const mySym = Symbol("key1")

const JSuser={  // Declaration of Object in Java Script
    name : "Deepak",   // key value-pair form
    "fullname" : "Deepak Gurjar",
    [mySym]: "myKey1", // Symbol ko key banaya square brackets ke saath Square brackets lagana zaroori hota hai tabhi JS Symbol ko evaluate karega.Is tarah se ye key unique ban jati hai, aur accidentally overwrite nahi hoti
    age : 23,
    location : 'Indore',
    email : "deepak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JSuser.email) // accessing data using .dot along with key name from object
console.log(JSuser["email"]) // another way of accessing data inside from an object using square brackets
console.log(JSuser["fullname"])
console.log(typeof JSuser[mySym]) // written type is String
console.log(typeof JSuser.mySym) // JSuser.mySym likhoge toh undefined aayega, kyunki vo "mySym" naam ka key dhundhega, na ki Symbol

 JSuser.email = "deepak@chatgpt.com" // we can override values in JS using =(equal to)
 //Object.freeze(JSuser); //JavaScript me kisi object ko freeze karna hai, taaki uski properties ko add, delete ya modify na kiya ja sake, toh aap Object.freeze() method ka use kar sakte ho.
 JSuser.email = "deepak@microsoft.com"
 console.log(JSuser)

 JSuser.greeting = function(){  
    console.log("Hello JS user");
 }
JSuser.greetingTwo= function(){
    console.log(`Hello JS user,${this.name}`); //Jab bhi Same object ko reference karna hai tabh likh skte hai this 
 }
 console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

/*
const tinderuser = new Object () // declaration of an empty object // its a singleton object
const tinderuser={} // its a non singleton object
*/
