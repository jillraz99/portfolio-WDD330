import U, { printName as printUserNAme, printAge } from '/user.js'
//to import non-default things like functions, need to put them inside curly brackets as when exported

const user = new U('Bob', 11)
console.log(user)
printUserNAme(user)
printAge(user)