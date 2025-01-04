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
    if (btn.textContent !== "X") {
      screen.value += btn.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  screen.value = "";
});

clearOne.addEventListener("click", () => {
  screen.value = screen.value.split("");
  console.log(screen.value);
});
