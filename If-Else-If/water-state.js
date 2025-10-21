//Q8
const prompt = require('prompt-sync')();
let temp=parseInt(prompt("Please enter the water temperature "))
if (temp<0){
    let result= "Ice (Solid)"
}
else if(temp<100){
    let result= "Water (Liquid)"
}
else{
    let result= "Steam (Gas)"
}
console.log(result)