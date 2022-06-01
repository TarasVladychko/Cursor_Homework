"use strict";
 let firstNumber;
 let secondNumber;

    firstNumber = +prompt("Enter first integer number: " );
 while (!(Number.isInteger(parseInt(firstNumber)) && firstNumber % 1 === 0)) {
    firstNumber = +prompt("Enter correct number");
}
console.log(firstNumber);


secondNumber = +prompt("Enter second integer number higher than first one: " );
 while (!(Number.isInteger(parseInt(secondNumber)) && secondNumber % 1 === 0 && secondNumber > firstNumber)) {
    
    secondNumber = +prompt("Enter correct number");
    
}
console.log(secondNumber);

let evenNumbers = confirm('Skip even numbers or not?');

let i;
let sum = 0;

for (i = firstNumber; i <= secondNumber; i++){
    if (evenNumbers && i % 2 == 0){
        continue;
    }
    else sum = sum + i;
    
   
}
console.log(sum);
alert(`Total amount ${sum}`)


