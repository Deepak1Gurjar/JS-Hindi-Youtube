//Singleton object ka matlab hota hai ek hi object ka instance create hota hai — baar baar naya object nahi banta.
//Singleton zyada tar tab use hota hai jab tumhe global config, single logger, ya koi shared utility object banana ho — jiska ek hi instance ho app bhar mein.
const tinderUser = new Object () // It is a singleton object 

//Non-singleton tab use hota hai jab tumhe multiple objects chahiye with separate data.
const tinderUser2 ={} // It is a non-singleton object
tinderUser.id = "abc123"
tinderUser.name = "Deepak"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    email : "Sam@gmail.com",
    fullname : {
        Userfullname :{
            firstname: "Sam",
            lastname: "Curran"
        }
        }
}
//console.log(regularUser.fullname.Userfullname.firstname) // Accessing multiple objects inside main object 

const obj1 = {1:"a", 2:"d",}
const obj2 = {3:"f"}
// different ways to merge or concate multiple objects in a single object
//const obj3 = {obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2) //Object.assign({}, ...) ka first parameter empty object dene se original objects mutate nahi hote.
//const obj3 = {...obj1,...obj2} //Spread Operator (...) se combine karna — sabse clean tareeka
//console.log(obj3)

const User = [         // Array  ke andar multiple objects 
    {

    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]

User[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // acessing the keys 
console.log(Object.values(tinderUser)) // acessing the values
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))