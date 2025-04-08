// var c =400 // Everything that I return outside the if block it is treted as a global scope
let a =50; // global scope
if(true){  // Everything that I return inside the if block it is treted as a block scope
let a=10
const b=20
var c= 30
//console.log("INNER:",a) // block scope
}
//console.log(a);
//console.log(b);
//console.log(c);

// NESTED SCOPE

function one(){
    const username = "Deepak"
     
    function two(){
      const website = "Youtube"
      console.log(username)
    }
//console.log(website)
//two()
}
//one()

if(true){
   const username  = "DEEPAK"
   if(username === "DEEPAK")
   {
     const website = " Youtube"
    // console.log(username + website);
   }
   //console.log(website); // website ya pe access nahi hoga kyu ki iska scoope second if condition block ke andar tak hi hai or hamne ese uss block ke outside print karvya hai
   
}
//console.log(username); // username ya pe access nahi hoga kyu ki iska scoope first if condition block ke andar tak hi hai or hamne ese uss block ke outside print karvya hai

// ++++++++++++++ Intersting Concept +++++++++++++++
// Different ways to declare and define functions in JavaScript

console.log(addone(5)) 
function addone(num){  // ya function define and declare kiya hai
  return num+1;
}

addtwo(5)  // function declare and define karne se phele access kar raha hunn 
const addtwo = function (num) // lekin yaha pe hamne function ko define and declare karne ke baad ek varible mein hold bhi kar diya hai
{
    return num + 2
}
