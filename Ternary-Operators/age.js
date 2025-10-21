//Q5
const prompt = require('prompt-sync')();

let age=parseInt(prompt("Enter your age "))

let result= age<13?"Child":
            age<20?"Teen":
            age<60?"Adult":
            "Senior"

console.log("You are " +result)