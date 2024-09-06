let firstNumber = ''
let secondNumber = ''
let sign = ''

const UI = {
  BUTTONS: {
    NUMBERS: document.querySelectorAll('.button-number'),
    SIGNS: document.querySelectorAll('.button-sign'),
  },
  DELETE: document.querySelector('.button-delete'),
  CLEAR: document.querySelector('.button-C'),
  TEXT: document.querySelector('.calc__display-text'),
  RESULT: document.querySelector('.button-result'),
}
console.log(UI.BUTTONS)

UI.CLEAR.addEventListener('click', clearResultText)
UI.DELETE.addEventListener('click', deleteLastDigit)

UI.BUTTONS.NUMBERS.forEach((button) =>
  button.addEventListener('click', showButtonText)
)
UI.BUTTONS.SIGNS.forEach((button) =>
  button.addEventListener('click', showSignText)
)

UI.RESULT.addEventListener('click', calculate)

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

function showButtonText(e) {
  const buttonText = e.target.textContent

  if (UI.TEXT.textContent === '0') {
    UI.TEXT.textContent = ''
  }
  if (secondNumber === '' && sign === '') {
    firstNumber += buttonText
    UI.TEXT.textContent = firstNumber
    console.log(UI.TEXT.textContent)
  } else {
    secondNumber += buttonText
    UI.TEXT.textContent = secondNumber
    console.log(UI.TEXT.textContent)
    return
  }
}

function showSignText(e) {
  const signText = e.target.textContent
  console.log('signText = ', signText)
  if (signText) {
    sign = signText
    UI.TEXT.textContent = sign
    console.log(UI.TEXT.textContent)
    return
  }
}

function calculate() {
  const a = firstNumber
  const b = secondNumber
  console.log('a = ', firstNumber)
  console.log('b = ', secondNumber)

  switch (sign) {
    case '+':
      a = number(a) + number(b)
      break
    case '-':
      a = number(a) - number(b)
      break
    case '*':
      a = number(a) * number(b)
      break
    case '/':
      a = number(a) / number(b)
      break
  }
  UI.TEXT.textContent = a
}

// if (UI.BUTTONS.RESULT) {
//   switch (sign) {
//     case '+':
//       a = +a + +b
//       break
//     case '-':
//       a = +a - +b
//       break
//     case '*':
//       a = +a * +b
//       break
//     case '/':
//       a = +a / +b
//       break
//   }
// }
// UI.TEXT.textContent = a
// console.log(a, b, operation)

// function calc(operation, a, b) {
//   switch (operation) {
//     case 'ADD':
//       return a + b
//     case 'SUBTRACT':
//       return a - b
//     case 'MULTI':
//       return a * b
//     case 'DIVIDE':
//       return a / b
//   }
// }
