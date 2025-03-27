// Primitive datatypes in JS
// Seven types of Primtive datatypes in JS & they are only Call by Value
// 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.Bigint

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
const id= Symbol('123')
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

let myobj={          // Objects
  name: "Deepak",
  age: 23,
}

const myfunction=function()
{
  console.log("Hello World");
}



