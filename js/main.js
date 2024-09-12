import UI from './ui.js'
console.log(UI)

let firstNumber = ''
let secondNumber = ''
let sign = ''
let result

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
    UI.TEXT.textContent = firstNumber
    if (firstNumber === '') {
      UI.TEXT.textContent = '0'
    }

    console.log('firstNumber = ', firstNumber)
  } else {
    secondNumber = secondNumber.slice(0, -1)
    UI.TEXT.textContent = secondNumber
    if (secondNumber === '') {
      UI.TEXT.textContent = '0'
    }

    console.log('secondNumber = ', secondNumber)
  }
}

function showButtonText(e) {
  const buttonText = e.target.textContent

  if (UI.TEXT.textContent === '0' && buttonText === '0') {
    return
  }

  if (secondNumber === '' && sign === '') {
    firstNumber += buttonText
    UI.TEXT.textContent = firstNumber
    console.log(UI.TEXT.textContent)
  } else {
    secondNumber += buttonText
    UI.TEXT.textContent = secondNumber
    console.log(UI.TEXT.textContent)
  }
}

function showSignText(e) {
  const signText = e.target.textContent
  if ((result !== '', sign)) {
    firstNumber = result
    secondNumber = ''
  }
  console.log('signText = ', signText)

  if (signText) {
    sign = signText
    UI.TEXT.textContent = sign
    console.log(UI.TEXT.textContent)
  }
}

function calculate() {
  const a = firstNumber
  const b = secondNumber

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
      if (b === '0') {
        UI.TEXT.textContent = 'ошибка'
        firstNumber = ''
        secondNumber = ''
        sign = ''
        return
      }
      result = Number(a) / Number(b)
      break
  }
  UI.TEXT.textContent = result
  console.log('result = ', result)
}
