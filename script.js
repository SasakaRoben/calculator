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
let operation;

function operate(operation, number1, number2){
    switch(operation){
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
        input.value += this.innerText;
    });
});

const clear = document.querySelector(".clear-button")
clear.addEventListener("click", function(){
    input.value = "";
});