// forEach loop in JS
const coding = ["js", "css", "html", "react", "node"]
// coding.forEach(function(item)   // kyu ki ye ek callback function hai esliye iss function ka koi name nhi hota hai or ye function array ke andar kaam kar raha hai toh ye () parameter ke andar apne app {(value,item,val) :- jo bolna hai woh leke aayega parameter ki tarah  
// {    
//       console.log(item)
// })

// coding.forEach ((item) => {   // kyu ki ye ek callback arrow function hai esliye iss arrow function ka koi name nhi hai
//     console.log(item)
// })

// function printMe (item){
//    console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,array)=>{  // parameters ek andar bas item hi nhi aata but index array bhi aa skta hai
//  console.log(item,index,array)   
// })


// Array ke andar objects hai or usska access forEach loop se liye hai
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName,item.languageFileName);
});