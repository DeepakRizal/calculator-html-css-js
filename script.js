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
  const expression = screen.value.replace(/÷/g, "/"); // Replace division symbol with `/`

  try {
    const result = evaluateExpression(expression);
    screen.value = result;
  } catch (error) {
    screen.value = "Error";
  }
});

function evaluateExpression(expression) {
  const numbers = [];
  const operators = [];
  let currentNumber = "";

  for (let char of expression) {
    if (!isNaN(char) || char === ".") {
      // Build the current number
      currentNumber += char;
    } else {
      // Push the completed number and the operator
      if (currentNumber !== "") {
        numbers.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      operators.push(char);
    }
  }

  // Push the last number
  if (currentNumber !== "") {
    numbers.push(parseFloat(currentNumber));
  }

  // Evaluate based on operator precedence
  const precedence = { "/": 2, "*": 2, "+": 1, "-": 1 };

  // Function to perform calculation
  const calculate = (a, b, op) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return b !== 0 ? a / b : "Error: Division by zero!";
  };

  // Process higher precedence operators first
  for (let op of Object.keys(precedence)) {
    while (operators.includes(op)) {
      const index = operators.indexOf(op);
      const result = calculate(numbers[index], numbers[index + 1], op);
      numbers.splice(index, 2, result); // Replace two numbers with the result
      operators.splice(index, 1); // Remove the operator
    }
  }

  // Final result
  return numbers[0];
}
