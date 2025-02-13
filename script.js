function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

let number1;
let number2;
let operator;

function operate(operator, number1, number2){
    switch(operator){
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            if(number2 != 0){
                return divide(number1, number2);
            }
            else{
                return "Error: Division by zero is not allowed";
            }
    }
}

const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");
const input = document.querySelector("input");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        const value = this.innerText;
        if (!isNaN(value)|| value === "."){
            input.value += value;
        }
        else if (["+", "-", "*", "/"].includes(value)){
            number1 = parseFloat(input.value);
            operator = value;
            input.value = "";
        }
        else if (value === "="){
            number2 = parseFloat(input.value);
            input.value = operate(operator, number1, number2);
            let result = input.value;
            number1 = result;
            operator = "";
            number2 = "";
        }
    });        
});

const clear = document.querySelector(".clear-button")
clear.addEventListener("click", function(){
    input.value = "";
});
