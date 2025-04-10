const useremail = "Deepak.ai"
if(useremail)  // yaha pe mere pass useremail ki value thi esliye mene direct if condition mein useremail likh ke condition check kar li
{
   console.log("Got user email")
}
else 
{
    console.log("Don't have user email")
}


//++++++++++++ falsy values +++++++++++++
// false, 0 , -0 , BigInt 0n, " ", null, undefined, NaN // These all are falsy values in JavaScript

//++++++++++++ truthy values ++++++++++  
// "0",'false', "false", " ", [ ],{ }, function ( ){ } // These all are truthy values in JavaScript

const useremail1 = []
if(useremail1)  // yaha pe mere pass useremail ki value thi esliye mene direct if condition mein useremail likh ke condition check kar li
{
   console.log("Got user1 email")
}
else 
{
    console.log("Don't have user email1")
}
if (useremail1.length === 0)
{
    console.log("Array is empty") // yaha pe array empty hai ya nhi woh check kiya hai
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) // (Object.keys(emptyobj) //bas itne statement se joh object hai woh array mein convert ho jayega fir jese array ki length findout ki thi vese hi .length laga ke object jo ki array mein convert hua hai uski length pata chal jayegi
{
   console.log("Object is empty")
}

//++++++++++++Nullish Coaleasing Operator(??) : null undefined ++++++++++++//
let val1;
//val1 = 55??10 // Yaha pe joh value phele milegi woh assig hogi val1 variable ke ander in our case phle wali value 55 hai esliye output mein 55 show hoga
//val1 = null??  // agar koi value mil jaygi toh woh val1 ke ander assign ko jayegi nhi toh undefined(null)show hogi
//val1 = undefined??15 // agar koi value mil jaygi toh woh val1 ke ander assign ko jayegi nhi toh undefined show hoga
val1 = null ?? 20 ?? 10 // Yaha pe joh value phele milegi woh assig hogi val1 variable ke ander in our case phle wali value 20 hai esliye output mein 55 show hoga
console.log(val1);

// Terniary Operator  
// condtion ? true : false  // basic syntax of terniary operator
const icecreamprice = 100
icecreamprice <=80 ? console.log("less than 80") : console.log ("more than 80")