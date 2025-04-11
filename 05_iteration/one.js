// for loop
// Syntax of for loop in JS
// for (let index = 0; index < array.length; index++) {  // let ek variable hai jiska name index or index ko haam array ki length se compair kar rahe hai 
//     const element = array[index];   // but yaha pe output mein array is not defined aayega kyu ki array hamne create nhi kiya hai esliye index ki value compair nhi hogi array se
// }

for (let i = 0;i <=10; i++) // 0 to 10 tak vlaues print ho rahi by using for loop  // shortcut trick in VS code to change variable name from all places in for loop is to select the declare variable and press command d 
{

    const element = i; //yha pe element variable create kiya hai jiske andar i ki value store ho rahi hai 
    if(element==5)
    {
        //console.log("5 is the best number"); // yha pe hoga ye ki jese hi i ki value 5 hogi or element mein store hogi toh if condtion check hogi agar condtion true hogi toh if block ke ander jo statement likha hai vo output mein show hoga
    }
    //console.log(element);
}
// or element variable ka scoope bas for loop ke andar tak hi hai uske baar use access nhi kar skte 
//console.log(element);

// loops ke andar loops  // 1 to 10 tak table print kiya hai do bar for loop ka use kar ke
for (let i = 1; i<=10; i++) {  
    //console.log(`Outer loop value :${i}`);
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j)
        }
    }  

// Basically array ke upar saara kaam karne ki kosish krta hai for loop JS mein by default
// toh haam ess bar array declare kar ke for loop ke sath uska ek example dekh rahe hai
let myArray = ["Batman", "Superman", "Ironman", "Spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
}

// break 
for (let i = 0; i <=20; i++) {
    if (i==5)
    {
        console.log('5 Detected')
        break;  //"Loop ko turant wahi pe rok deta hai aur uske baad ka loop code nahi chalta."
    }
    console.log(`Value of i is :${i}`)
}

// continue 
for (let i = 0; i <=20; i++) {    // shortcut in Vs code for copy paste in MAC is option shift down arrow key  
    if (i==5)
    {
        console.log('5 Detected')
        continue;  
    }
    console.log(`Value of i is :${i}`) //"Current iteration skip karta hai aur loop ka next round chalu kar deta hai."
}