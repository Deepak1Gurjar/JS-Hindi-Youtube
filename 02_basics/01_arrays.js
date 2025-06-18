// array

const myArr =[1,2,3,4,5]
console.log(myArr);
console.log(myArr[1]);
const myHeors=["Shaktimaan", "Naagraj", "Haatim"]
console.log(myHeors);

const myArr2= new Array (1,2,3,4,5) // declaration of array in different way
console.log(myArr2);

// Array methods

// PUSH AND POP
myArr.push(6) // push is uesd to add a new value in existing array
console.log(myArr) 
myArr.pop() // pop is uesd to removed last value of the array atuomatically 
console.log(myArr)

// UNSHIFT AND SHIFT
myArr2.unshift(9) 
console.log(myArr2);
myArr2.shift()
console.log(myArr2);
console.log(myArr2.includes(2));
console.log(myArr2.indexOf(2));

// JOIN
const newArr = myArr2.join()
console.log(myArr2)
console.log(newArr)
console.log(typeof newArr)

// SLICE AND SPLICE

console.log("A", myArr2)
const myn1= myArr2.slice(1,3) // Slice Copy karta hai, original array ko nahi chhedta Slice mein range include nahi hoti hai 

console.log(myn1);  
console.log("B", myArr2)

const myn2= myArr2.splice(1,3) // Splice Original array ko hi modify karta hai splice mein range include hoti hai
console.log("c", myArr2)
console.log(myn2);