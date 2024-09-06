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
  firstNumber = ''
  secondNumber = ''
  sign = ''
  UI.TEXT.textContent = '0'
}

function deleteLastDigit() {
  if (sign === '') {
    firstNumber = firstNumber.slice(0, -1)
    if (firstNumber === '') {
      firstNumber = '0'
    }
    UI.TEXT.textContent = firstNumber
    console.log('firstNumber = ', firstNumber)
  } else {
    secondNumber = secondNumber.slice(0, -1)
    if (secondNumber === '') {
      secondNumber = '0'
    }
    UI.TEXT.textContent = secondNumber
    console.log('secondNumber = ', secondNumber)
  }
}

function showButtonText(e) {
  const buttonText = e.target.textContent

  if (UI.TEXT.textContent === '0' && buttonText === '0') {
    return
  }

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
  let result
  console.log('a = ', firstNumber)
  console.log('b = ', secondNumber)

  switch (sign) {
    case '+':
      result = Number(a) + Number(b)
      break
    case '-':
      result = Number(a) - Number(b)
      break
    case '*':
      result = Number(a) * Number(b)
      break
    case '/':
      result = Number(a) / Number(b)
      break
  }
  UI.TEXT.textContent = result
  console.log('result = ', result)
}
