let z = window.prompt("Please enter your action: +, -, * , /")
let number1 = window.prompt("Enter a number");
let number2 = window.prompt("Enter the other number");
var y = "+"
var q = "-"
var w = "*"
var r = "/"
number1 = parseFloat (number1)
number2 = parseFloat (number2)
// addition
if(z == y){
    alert(number1 + number2);
}
// sum
else if(z == q){
    alert(number1 - number2);
}
// multiplication
else if(z == w){
    alert(number1 * number2);
}
// Division8
else if(z == r){
    alert(number1 % number2);
}
else{
    alert("Invalid operations Please Enter functional operations")
}
