const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.map( (num) => {return num+10} )
//console.log(newNums)

// Same output print kiya hai using forEach loop along with .push method
// const newnums = [];
// myNums.forEach((num) => {
//     newnums.push(num + 10);
// });
// console.log(newnums);

const newNums = myNumbers
.map((num)=> num * 10) // num ko multiply kiya hai 10 se 
.map ( (num)=> num + 1) // multiply karne ke baad jo value aayi hai usme 1 add kiya hai
.filter( (num)=> num>=40) //wahi values print hogi jo multiply karne ke baad 40 ke equal hai ya usse greater hogi hai
console.log(newNums);