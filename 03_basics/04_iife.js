// Immeditely Invoked Function Expression
// gllobal scoope ke pollution se problem hoti hai kahai baar toh uss global scoope ke joh bhi variables ya declartion hai usko hatane ke liye IIFE ha use kiya hai
(function chai () // this function has its name chai then it is called as Named IIFE
{
   console.log(`DB CONNECTED`)
}) 
();  // First ko end karne ke liye mene yaha explicitly semicolon lagya hai jo ki directly nhi lagta hai

( (name)=>      // this function has no name then it is called as normal IIFE
{
   console.log(`DB CONNECTED TWO ${name}`);
}) 
('DEEPAK')
