// forin loop in js
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by people'
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`) // forin loop yaha pe kaam karega object ke sath but forof loop nhi karega
}

const programming = ["js","cpp","rb","swift","java"]
for (const key in programming) {
    //console.log(key) // esse bas array ki key print hogi //yes arrays ki bhi key hoti or woh hamesha 0 se start hoti hai
   //console.log(programming[key]) // esse programming array ki values pata chal jayegi
}

// const map = new Map()  //map ke andar key:Values unique hogi or jis order mein aapne enter ki hai usi order mein show karegi
// map bhi iterable nhi hai
//     map.set('IN',"India")
//     map.set('USA',"United States of America")
//     map.set('UK',"United Kingdom")

// for (const key in map) {
//     console.log(key)
// }