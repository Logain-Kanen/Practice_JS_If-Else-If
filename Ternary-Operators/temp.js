// Q1
const prompt = require('prompt-sync')();

let temp=parseInt(prompt("Please enter the temperature"))

let result=temp>30?"Hot":"Normal"

console.log("It is " + result)