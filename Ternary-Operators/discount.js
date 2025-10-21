//Q2
const prompt = require('prompt-sync')();

let cost=parseInt(prompt("Please enter the purchase amount "))

let result=cost>100?"a 10% discount":"no discount"

console.log("You get " + result)