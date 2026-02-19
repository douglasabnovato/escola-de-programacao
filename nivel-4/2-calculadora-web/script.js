// Variáveis para armazenar o estado da calculadora
let displayValue = '';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// Objeto para mapear os operadores
const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

// Referência ao display
const resultado = document.getElementById('resultado');

// Função para atualizar o display
function updateDisplay() {
  resultado.value = displayValue;
}

// Lida com a entrada de dígitos (números e ponto decimal)
function inputDigit(digit) {
  if (waitingForSecondOperand === true) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

// Lida com a entrada de operadores
function handleOperator(nextOperator) {
  const inputValue = parseFloat(displayValue);

  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }

  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = operators[operator](firstOperand, inputValue);
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
  }

  waitingForSecondOperand = true;
  operator = nextOperator;
}

// Lida com o botão de limpar 'C'
function resetCalculator() {
  displayValue = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

// Lida com cliques nos botões
function handleButtonClick(event) {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  const value = target.textContent;

  if (value === 'C') {
    resetCalculator();
    return;
  }

  if (value === '=') {
    if (operator && firstOperand !== null) {
      handleOperator(operator);
      operator = null;
    }
    updateDisplay();
    return;
  }
  
  if (value in operators) {
    handleOperator(value);
  } else {
    inputDigit(value);
  }

  updateDisplay();
}

// Adiciona um listener de evento para o contêiner de botões
const botoes = document.querySelector('.botoes');
botoes.addEventListener('click', handleButtonClick);

// Inicializa o display ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  displayValue = '0';
  updateDisplay();
});