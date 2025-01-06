const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");
const clearOne = document.querySelector(".clearOne");
const percentage = document.querySelector(".percentage");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const substract = document.querySelector(".substract");
const addition = document.querySelector(".addition");
const point = document.querySelector(".point");
const equalsTo = document.querySelector(".equalsTo");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent !== "X" && btn.textContent !== "=") {
      screen.value += btn.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  screen.value = "";
});

clearOne.addEventListener("click", () => {
  let inputValue = screen.value.split("");
  inputValue.pop();
  screen.value = inputValue.join("");
});

equalsTo.addEventListener("click", () => {
  let operator = [];
  const valueToCalculate = screen.value.split("");
  for (let number of valueToCalculate) {
    if (isNaN(number)) {
      operator.push(number);
    } else if (number === "÷") {
      operator[valueToCalculate.indexOf(number)] = "/";
    }
  }

  const numbers = screen.value.split("*" || "+" || "-" || "/");
  const number1 = Number(numbers[0]);
  const number2 = Number(numbers[1]);

  let result;

  if (operator.length === 1) {
    if (operator[0] === "*") {
      result = number1 * number2;
    } else if (operator[0] === "+") {
      result = number1 + number2;
    } else if (operator[0] === "-") {
      result = number1 - number2;
    } else if (operator[0] === "+") {
      result = number1 + number2;
    } else if (operator === "/") {
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        result = "Error: Division by zero!";
      }
    }
  }

  screen.value = result;
});
