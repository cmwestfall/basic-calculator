const numberButtons = document.querySelectorAll(".number");

const negativeButton = document.getElementById("negative");
const backspaceButton = document.getElementById("backspace");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const equalButton = document.getElementById("equal");

let total = 0;
let input = 0;

numberButtons.forEach((button) => {
  return parseInt(button.id);
});

const changeNegative = (number) => {
  return "-" + number;
};

negativeButton.addEventListener("click", changeNegative);
