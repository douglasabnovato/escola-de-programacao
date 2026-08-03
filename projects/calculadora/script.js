/* --- JS: LÓGICA DE ESTADO REFINADA --- */
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display");
const formulaDisplay = document.querySelector(".display__formula");

const calculate = (n1, operator, n2) => {
  const a = parseFloat(n1);
  const b = parseFloat(n2);
  if (operator === "add") return a + b;
  if (operator === "subtract") return a - b;
  if (operator === "multiply") return a * b;
  if (operator === "divide") return a / b;
  if (operator === "percentage") return (a / 100) * b;
};

const getKeyType = (key) => {
  const { action } = key.dataset;
  if (!action) return "number";
  if (["add", "subtract", "multiply", "divide", "percentage"].includes(action))
    return "operator";
  return action;
};

keys.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;

  // Resetar visual dos operadores
  Array.from(key.parentNode.children).forEach((k) =>
    k.classList.remove("is-depressed"),
  );

  if (!action) {
    // NÚMEROS
    if (
      displayedNum === "0" ||
      previousKeyType === "operator" ||
      previousKeyType === "calculate"
    ) {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
    calculator.dataset.previousKeyType = "number";
  }

  if (action === "decimal") {
    if (!display.textContent.includes(".")) {
      display.textContent = displayedNum + ".";
    } else if (
      previousKeyType === "operator" ||
      previousKeyType === "calculate"
    ) {
      display.textContent = "0.";
    }
    calculator.dataset.previousKeyType = "decimal";
  }

  if (
    ["add", "subtract", "multiply", "divide", "percentage"].includes(action)
  ) {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;

    if (
      firstValue &&
      operator &&
      previousKeyType !== "operator" &&
      previousKeyType !== "calculate"
    ) {
      const calcValue = calculate(firstValue, operator, secondValue);
      display.textContent = calcValue;
      calculator.dataset.firstValue = calcValue;
    } else {
      calculator.dataset.firstValue = displayedNum;
    }

    key.classList.add("is-depressed");
    calculator.dataset.previousKeyType = "operator";
    calculator.dataset.operator = action;
    formulaDisplay.textContent = `${calculator.dataset.firstValue} ${keyContent}`;
  }

  if (action === "clear") {
    display.textContent = "0";
    formulaDisplay.textContent = "";
    calculator.dataset.firstValue = "";
    calculator.dataset.modValue = "";
    calculator.dataset.operator = "";
    calculator.dataset.previousKeyType = "";
  }

  if (action === "delete") {
    display.textContent = display.textContent.slice(0, -1) || "0";
  }

  if (action === "calculate") {
    let firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    let secondValue = displayedNum;

    if (firstValue) {
      if (previousKeyType === "calculate") {
        firstValue = displayedNum;
        secondValue = calculator.dataset.modValue;
      }

      const result = calculate(firstValue, operator, secondValue);
      display.textContent = result;
      formulaDisplay.textContent = "";
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
    }
  }
});

// Suporte a Teclado
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const button = Array.from(document.querySelectorAll("button")).find(
    (b) =>
      b.textContent === key ||
      (key === "Enter" && b.dataset.action === "calculate") ||
      (key === "Backspace" && b.dataset.action === "delete") ||
      (key === "Escape" && b.dataset.action === "clear"),
  );
  if (button) button.click();
});
