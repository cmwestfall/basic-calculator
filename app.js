const numberButtons = document.querySelectorAll(".number");

const display = document.getElementById("display");
const negativeButton = document.getElementById("negative");
const backspaceButton = document.getElementById("backspace");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const equalButton = document.getElementById("equal");

let total = 0;
let input = 0;

// function for allowing the number buttons to work
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.id;
    console.log(display);
  });
});

const changeNegative = (number) => {
  return "-" + number;
};

const backspace = () => {};

const multiply = (num1, num2) => {
  total = num1 * num2;
};

const divide = (num1, num2) => {
  total = num1 / num2;
};

const subtract = (num1, num2) => {
  total = num1 - num2;
};

const add = (num1, num2) => {
  total = num1 + num2;
};

const equal = () => {};

negativeButton.addEventListener("click", changeNegative);
