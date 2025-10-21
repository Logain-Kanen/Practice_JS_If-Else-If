//Q4
const prompt = require('prompt-sync')();

let day=prompt("Today is? ")

let result= day==="Saturday"|| day==="Sunday"?"the Weekend":"a Weekday"

console.log("It is " +result)