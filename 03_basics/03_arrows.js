const user = {
 username : "Deepak",
 price : 999,
 welcomeMessage : function(){
    console.log(`${this.username}, welcome to website `);
    console.log(this); //this current context ki baat karta hai means jo bhi current value uske context mein baat karega
 }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this)

// function chai (){
//     let username = "Deepak"
//     console.log(this.username) // function ke andar aake haam this is tarah se use nhi kar sktr bas objects ke andar ye kaam karega
// }
// chai();

// const chai = function()
// {
//     let username = "Deepu"
//     console.log(this.username);
// }
// chai()


//+++++++++++++ ARROW FUNCTION ++++++++++++++++//
const chai = () =>
{
    let username = "Deepu"
    console.log(this);
}
chai()

// const addTwo = (num1,num2) =>  // Basic arrow function
// {
//     return num1+num2  // curely bracesis use hoga toh return keyword likhna hi padega //Explict return
// }
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => num1+num2 // Implict return 
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => (num1+num2) // parenthesis use hoga toh return keyword nhi likhna padega
// console.log(addTwo(3,4))

const addTwo = (num1,num2) => ({username : "Deepak"}) // yaha pe bhi object ko return karne ke liye parenthesis use karna hi padega