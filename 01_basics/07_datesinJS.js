//Dates
let myDate = new Date()  // Date is an object in JavaScript
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());  // Real life Quizz timestamp create karte time toLocaleTimeString ka use karte hai
console.log(myDate.toUTCString());
console.log( typeof myDate);


// Creating Dates based on our choice in different ways in JS
let myCreatedDate = new Date(2023, 0, 23) // months started from 0 index in javascript as these values are passed as an array  
console.log(myCreatedDate.toDateString());

let mynewDate = new Date(2024, 3, 6, 12, 40)
console.log(mynewDate.toLocaleString());

let mylatestDate = new Date("2024-04-06")  // (yy-mm-dd)
console.log(mylatestDate.toLocaleString());

let myfavDate = new Date("06-04-2024")
console.log(myfavDate.toLocaleString());

let myTimeStamp = Date.now()  // timestamp is bascially used when we wanted to create quizzs and poles
console.log(myTimeStamp);
console.log(myfavDate.getTime());
console.log(Math.floor(Date.now()/1000)) //Date.now() → Milliseconds deta hai / 1000 → Milliseconds ko seconds mein convert kar diya Math.floor() → Floor function use karke decimal hata diya (round down)


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); // here we add 1 because the end user will get the correct value of the ongoing month
console.log(newDate.getDay());
console.log(newDate.getTime());

newDate.toLocaleString('default', {weekday: "long"})