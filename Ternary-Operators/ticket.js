//Q3
const prompt = require('prompt-sync')();

let age=parseInt(prompt("Please enter your age "))

let result=age>=12?"15":"8"

console.log("Ticket cost is $" + result)