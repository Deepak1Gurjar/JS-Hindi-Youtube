const accountId = 144553 // Cannot change the value of const 
let accountEmail = "deepak@google.com" // Can change the value of let variable
var accountPassword = "12345" // Can change the value of var variable
accountcity = "Indore" //Without defining the datatype we can declare a variable in Java Script
let accountstate; // It dosen't matter in JS that we use semicolon  

//accountId = 2 //not allowed
accountEmail = "dg@dc.com"
accountPassword = "212121"
accountcity = "Harda"
console.log(accountId);
/*
   Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountcity, accountstate])