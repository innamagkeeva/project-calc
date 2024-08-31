const UI = {
  BUTTONS: {
    NUMBERS: document.querySelectorAll('.button-number'),
    // TWO: document.querySelector('.button-2'),
    // THREE: document.querySelector('.button-3'),
    // FOUR: document.querySelector('.button-4'),
    // FIVE: document.querySelector('.button-5'),
    // SIX: document.querySelector('.button-6'),
    // SEVEN: document.querySelector('.button-7'),
    // EIGHT: document.querySelector('.button-8'),
    // NINE: document.querySelector('.button-9'),
    // ZERO: document.querySelector('.button-O'),

    SIGNS: document.querySelectorAll('.button-sign'),
    // ADD: document.querySelector('.button-add'),
    // SUBTRACT: document.querySelector('.button-subtract'),
    // MULTI: document.querySelector('.button-multi'),
    // DIVIDE: document.querySelector('.button-divide'),
  },
  DELETE: document.querySelector('.button-delete'),
  CLEAR: document.querySelector('.button-C'),
  TEXT: document.querySelector('.calc__display-text'),
  RESULT: document.querySelector('.button-result'),
}
console.log(UI.BUTTONS)

UI.BUTTONS.NUMBERS.forEach((button) =>
  button.addEventListener('click', showButtonText)
)
UI.CLEAR.addEventListener('click', clearResultText)
UI.DELETE.addEventListener('click', deleteLastDigit)
UI.BUTTONS.RESULT.addEventListener('click', calculate)

function showButtonText(e) {
  let buttonText = ''
  buttonText = e.target.textContent
  if (UI.TEXT.textContent === '0') {
    UI.TEXT.textContent = ''
  }
  UI.TEXT.textContent += buttonText
  console.log(UI.TEXT.textContent)
}

function clearResultText() {
  UI.TEXT.textContent = '0'
}

function deleteLastDigit() {
  const displayValue = UI.TEXT.textContent
  if (displayValue.length > 1) {
    UI.TEXT.textContent = displayValue.slice(0, -1)
  } else {
    UI.TEXT.textContent = '0'
  }
}

function calculate() {
  let num1 = ''
  let num2 = ''
  const operation = UI.BUTTONS.SIGNS.textContent
  const calcResult = calc(operation, num1, num2)

  if (UI.BUTTONS.SIGNS.textContent) {
    calcResult
  }
}

function calc(operation, a, b) {
  switch (operation) {
    case 'ADD':
      return a + b
    case 'SUBTRACT':
      return a - b
    case 'MULTI':
      return a * b
    case 'DIVIDE':
      return a / b
  }
}
