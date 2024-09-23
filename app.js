const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");

const display = document.getElementById("display");
const negativeButton = document.getElementById("negative");
const backspaceButton = document.getElementById("backspace");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");

let total = 0;
let currentOperation = "";

// allows the number buttons to work
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.value === "0") {
      display.value = parseFloat(button.id);
    } else {
      display.value += parseFloat(button.id);
    }
  });
});

// allows there to be a 'current' operation to work with
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    total = parseFloat(display.value);
    currentOperation = button.id;
    display.value = 0;
  });
});

//negativeButton
negativeButton.addEventListener("click", () => {
  if (display.value.includes("-")) {
    display.value = display.value.toString().slice(1);
  } else {
    display.value = "-" + display.value;
  }
});

// allows the user to input decimal numbers
decimalButton.addEventListener("click", () => {
  display.value += ".";
});

// backspace button for deleting mistakes
backspaceButton.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});

// clear button for clearing the display
clearButton.addEventListener("click", () => {
  display.value = "0";
});

// equal button functionality
equalButton.addEventListener("click", () => {
  if (currentOperation === "plus") {
    display.value = total + parseFloat(display.value);
    total = parseFloat(display.value);
  } else if (currentOperation === "minus") {
    display.value = total - parseFloat(display.value);
  } else if (currentOperation === "multiply") {
    display.value = total * parseFloat(display.value);
  } else if (currentOperation === "divide") {
    display.value = total / parseFloat(display.value);
  }

  currentOperation = "";
});
