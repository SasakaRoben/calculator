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

let number1 = null;
let number2 = null;
let operator = "";
isOperatorLast = false; //There is a bug that comes with misspelling the false, check on it when I return

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
        default:
            return "Error: Invalid operator";
    }
}

const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");
const input = document.querySelector("input");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        const value = this.innerText;
        if (!isNaN(value)|| value === "."){
            if(value === "." && input.value.includes(".")) return;
            input.value += value;
            isOperatorLast = false;
        }
        else if (["+", "-", "*", "/"].includes(value)){
            if(isOperatorLast){
                operator = value; //replace previous operrator
                return;
            }

            number1 = parseFloat(input.value);
            operator = value;
            input.value = "";
            isOperatorLast = true; //Mark that an operator was last pressed
        }
        else if (value === "="){
           if(isOperatorLast) return; //Prevent evaluation if last keypress was an operator

            number2 = parseFloat(input.value);
            input.value = operate(operator, number1, number2);
            let result = parseFloat(input.value);
            number1 = result;
            operator = "";
            number2 = null;
        }
    });        
});

const clear = document.querySelector(".clear-button")
clear.addEventListener("click", function(){
    input.value = "";
    number1 = null;
    number2 = null;
    operator = "";
    isOperatorLast = false;
});
