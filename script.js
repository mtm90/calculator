const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    updateDisplay(buttonText);
  });
});

clearButton.addEventListener("click", () => {
  clearDisplay();
});

equalsButton.addEventListener("click", () => {
  calculateResult();
});

function updateDisplay(text) {
  display.textContent += text;
}

function clearDisplay() {
  display.textContent = "";
}

function calculateResult() {
  const expression = display.textContent;
  let result;

  try {
    result = eval(expression);

    if (isNaN(result)) {
      throw new Error("Invalid expression");
    }

    display.textContent = result;
  } catch (error) {
    display.textContent = "Error";
  }
}
