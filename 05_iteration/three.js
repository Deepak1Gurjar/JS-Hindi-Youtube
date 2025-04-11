// for of Loop in JS  // High order loops in JS
// [" "," "," "]  // array ke andar string
// [{},{},{}] // array ke andar object
//    for (const element of object) {    // Syntax of (for of) loop in JS 
        
//    }
const arr = [1,2,3,4,5]   
for (const num of arr)   //yaha pe num name se ek variable declare kiya num name se or jis object pe loop lagna hai uska name likha hamre case mein object ka name arr hai esliye hamne arr likha hai
{
     //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " "){   //agar wo character space hai, to continue se us iteration ko skip karo
        continue;
    }
    //console.log(`Each character is ${greet}`)
}

// MAPS

const map = new Map()  // key:Values unique hogi or jis order mein aapne enter ki hai usi order mein show karegi
{
    map.set('IN',"India")
    map.set('USA',"United States of America")
    map.set('UK',"United Kingdom")
  console.log(map);
  for (const key of map)  // esa likhunga toh sare key and value ek array ek form aa jayenge
  {   
   // console.log(key)
  }
}
for (const [key,value] of map) {  // esa likhunga toh sare key and value pair form aa jayenge jo ki sahi hoga // yaha pe hamne map ke uppar for of loop lagya hai
    console.log(key, ':-', value)
}

const myObject = {
    Game1 : 'NFS',
    Game2 : 'Spiderman'
}
// for (const [key,value] of myObject) {  // forof loop yaha pe kaam nhi karega kyu ki object iterable nhi hai
//     console.log(key,":-",value)
    
// }