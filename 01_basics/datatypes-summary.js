// Primitive datatypes in JS
// Seven types of Primtive datatypes in JS & they are only Call by Value
// 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.Bigint

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
const id= Symbol('123')   // In this we use two different variables as id & anotherId and store same data in both using symbol data type that is 123 but if we check this using triple equalto operator than it will result false even though both variables having same datatype and values these is because that the symbol data type returns different-different values 
const anotherId=Symbol('123')
console.log(id === anotherId);
const bigNumber = 1233568589
const bigbigNumber = 387464348748337557n // n is written to represent that the given number is Bigint

// Non Primitive datatypes in JS
// They are only Call by Reference
// 1.Array 2.Objects 3.Functions 
// Non primitive array objects ke datatype  ko functions bolte hai or joh function hai uske datatype ko object function bolte hai

const heros = ["Shaktimaan","Naagraj","Doga"] //Arrays
console.log(heros);

let myobj={          // Objects declaration
  name: "Deepak",
  age: 23,
}

const myfunction=function() // function declaration
{
  console.log("Hello World");
}

//stack(Primitive)
//Heap(Non-Primitive) heap ke andar hame reference milta hai original value ka esliye heap ke andar jo bhi change karenge woh original value mein change karega


let myYoutubename = "deepakgurjar.com"
let anothername = myYoutubename
anothername="chaiaurcode"      // change in copy value not in original value beacuse in stack copy of original value is given not the reference of original value
console.log(myYoutubename);
console.log(anothername);

let userOne = {                //Heap ke andar reference diya jata hai. Dono variables ek hi object ko point karte hain.
  email: "user@google.com", 
  upi: "user@ybl"
}
let userTwo=userOne 

userTwo.email="deepak@google.com" //We can access the key or value of an object through dot(.)
console.log(userOne.email)  // to access the data inside the object we have to enter object name then key name along with dot operator in js
console.log(userTwo.email)



// let userthree =
// {
//   userId : "deepak123",
//   dob : 12/6/25
// }

// let userfour=userthree

// userfour.userId="kapil123"
// console.log(userthree.userId)
// console.log(userfour.userId)

