function saymyname(){  // saymyname is the name of my function that I have created
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
    console.log("A")
    console.log("K")
    
}
saymyname() // calling a function (print letters returns nothing) 
console.log(saymyname()) // Print letters + undefined

function saymyname1(){  // saymyname1 is the name of my function that I have created
    console.log("G")
    console.log("U")
    console.log("R")
    console.log("J")
    console.log("A")
    console.log("R")
    return "GURJAR";
}
saymyname1() // print letters returns nothing
console.log(saymyname1()) // Print letters + return value

// function declare and define passing parameters & arguments to the function

// function addTwoNumbers (num1,num2) // passing parameters to the function
// {   
//     console.log(num1+num2)
// }
// addTwoNumbers(3,4); // inside this (3,4) this are passed as an arguments

// function addTwoNumbers (num1,num2) // passing parameters to the function
// {   
//     console.log(num1+num2);
// }
// const result=addTwoNumbers(3,4); // isme mene ek new variable ke andar function ke output result ko store karaya hai
// console.log("Result :" + result); //because console.log() sirf print karta hai, return nahi karta.

function addTwoNumbers (num1,num2)
{   
    // let result1=num1+num2 
    // console.log("return declare karne se phele ka statement excecute ho raha hai")
    // return result1;
    return num1+num2;
    //console.log("Function ki definition ka ek rule hota hai ki agar apne ek bar return declare kar diya uske baad koi bhi statement excecute nhi hota")
}
const result1=addTwoNumbers(3,4); 
//console.log("Result :" , result1); 

function loginUserMessage(Username = "Deepu"){
    //if(Username === undefined)  // condition check kar rahe hai ki username enter kiya hai ya nhi  // check karne ka tarika number 1
   if (!Username) // Exliamatory NOT (!) is matlab bhi true ko false and false ko true // check karne ka tarika number 2
    {
       console.log("Please enter a Username");
       return
    }
    return `${Username} just logged in`   //${Username} → yeh syntax use karke tum variable ko string ke andar insert kar rahe ho


}
//console.log(loginUserMessage()) // yha pe koi value nhi pass ki hai esliye undefined show karega output mein
//console.log(loginUserMessage("Deepak")) // yha pe koi value pass ki hai Deepak esliye Deepak show karega output mein

// function calculateCartPrice (...num1) // Function ke andar multiple values ko pass kiya hai using ... rest operator
// {
//     return num1
// }
// console.log(calculateCartPrice(2,4,6,10))

function calculateCartPrice (val1, val2, ...num1) // Function ke andar multiple values ko pass kiya hai using ... rest operator
{
    return num1
}
//console.log(calculateCartPrice(2,4,6,10))


// 
const user = {     // Creating a Object in JS and the object name in our case is user 
    username : "Josh",
    price : 999,
}
function handleObject (anyobject)
{
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // object ke andar jo data hai key value pair ke form mein jisme key as a variable act kar rahi hai usko haam backticks dollar curely bracesis ki help se access kar rahe hai 
}

//handleObject(user) // function ko call kiya jiska name handleobject hai or uske andar haamko object ko hi pass karna padega jiska name hai user
handleObject({       // object ko direct pass kiya hai yaha pe
    username : "Sam",
    price : 599
})

const myNewArray = [200,400,600,800,1000]
function returnSecondvalue (getArray){
    return getArray [1]
}

//console.log(returnSecondvalue(myNewArray)); // as a variale pass kiya hai array ko jiska name hai myNewArray
console.log(returnSecondvalue([200,400,600,800,1000])); // direct values ke through bhi pass kar skte hai