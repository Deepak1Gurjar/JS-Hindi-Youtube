// bonous tip for MAC terminal agar koi loop infinte time execute ho raha or usse haame terminal mein stop krna hai toh control c se kar skte hai stop toh woh system mein or jada faltu memory occupied nahi karega
// while loop
// Syntax of while loop in JS

// while (condition) {
    
// }

let index = 0 // yha pe index name se ek variable declare kiya hai or initialize kiya hai 0 se
while (index<=10) {       // condition check hogi 
    const element = index; // element name ke ek variable mein index variable ki value store hogi 
    index ++; // post increment 
    //console.log(element);
}

let i = 0 // yha pe i name se ek variable declare kiya hai or initialize kiya hai 0 se
while (i<=10) {       // condition check hogi 
    //console.log(`Value of i is : ${i}`)  // yaha pe i ko direct print karvaya hai 
    i++; // post increment 
}

// toh haam ess bar array declare kar ke while loop ke sath uska ek example dekh rahe hai
let myArray = ["flash","Batman","Ironman","Superman","Spiderman"]
let j=0
while (j<myArray.length) {
    //console.log(`Value is ${myArray[j]}`)  //Har iteration mein, myArray[j] ki value print karega
    j++;
}

// do while loop
// Syntax of do-while loop in JS
// do {
    
// } while (condition);

let score =1 // yaha pe score name se ek varible declare kiya hai or initialize kiya hai 1 se
do {
    //console.log(`Score is  ${score}`); // do-while loop mein ek baar do block ke andar likha hua statement execute hoga uske baad while loop ke andar condition check hogi iska siddha matlab hai kaam phele hoga condition ukse baad check hogi
    score++
} while (score<=10);

// database se jab bhi aap kuch data ya values fetch karoge woh sab array ke form mein aati 