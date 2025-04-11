// reduce
const myNums = [1,2,3]
// yaha function ka use kar ke likha hai
// const mytoatl=myNums.reduce( function(accumulator, Currentvalue){   
//     console.log(`acc:${accumulator} and currval:${Currentvalue}`)
//     return accumulator + Currentvalue
// },3)   // Accumulator ko pata kese chalega ki mein start kaha se karu esliye function ke baad ek comma lagta hai uske baad accumulator ki value di jati hai
// console.log(mytoatl)

// yaha pe arrow function use kar ke likhte hai
const myTotal=myNums.reduce( (accumulator,Currentvalue)=>accumulator+Currentvalue,0)
//console.log(myTotal)

// Yaha pe ek shoppingCart hai uske andar jo item purchase kiya hai unko add karna hai iske liye hamne reduce ka use kiya hai
const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "ds course",
        price : 12999
    }
]
const priceToPay=shoppingCart.reduce( (accumulator,item)=>accumulator+item.price,0)
console.log(priceToPay)