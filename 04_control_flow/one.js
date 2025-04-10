//conditional statement

// const isUserloggedIn = true     // <,>,<=,>=,=,==,!=,===.!==
// const temprature = 41
// if(temprature ===40)
// {
//   console.log("less than 50")
// }
// else 
// {
//     console.log("greater than 50")
// }
// console.log("Always exceute")

// const score = 200
// if(score>100)
// {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000
// if (balance>500) console.log("test"), console.log("test2") // comma laga ke app multiple statement likh skte hai without curely bracesis but ye ek acchi pratice nhi hai 
// if(balance < 500)
// {
//     console.log("less than 500");
// }
// else if(balance <750)
// {
//     console.log("less than 750");
// }
// else if(balance < 950)
// {
//     console.log("less than 950");
// }
// else 
// {
//     console.log("less than 1200");
// }

// real life example to purchase a course
const UserloggedIn = true
const debitcard = true
const loggedInfromGoogle = true
const loggedInfromemail = false
if (UserloggedIn && debitcard)  // logical  && operator ka use kiya multiple conditon of test karne ke liye 
{
    console.log("Allow to purchase course");
}

if(loggedInfromGoogle || loggedInfromemail) // logical  || operator ka use kiya multiple conditon of test karne ke liye
{
    console.log("User logged in")
}

