//Q5
const prompt = require('prompt-sync')();
let color=prompt("Please enter the light color ")
if (color==="Red"){
    let result= "Stop"
}
else if(color==="Green"){
    let result= "Go"
}
else if(color==="Yellow"){
    let result= "Slow Down"
}
else{
    let result= "Invalid Color"
}
console.log(result)