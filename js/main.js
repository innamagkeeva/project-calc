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

    RESULT: document.querySelector('.button-result'),
    ADD: document.querySelector('.button-add '),
    SUBTRACT: document.querySelector('.button-subtract'),
    MULTI: document.querySelector('.button-multi'),
    DIVIDE: document.querySelector('.button-divide'),
    DELETE: document.querySelector('.button-delete'),
    CLEAR: document.querySelector('.button-C'),
  },

  TEXT: document.querySelector('.calc__display-text'),
}
console.log(UI.BUTTONS)

UI.BUTTONS.NUMBERS.forEach((button) =>
  button.addEventListener('click', showButtonText)
)
UI.BUTTONS.CLEAR.addEventListener('click', clearResultText)
UI.BUTTONS.DELETE.addEventListener('click', deleteLastDigit)

function showButtonText(e) {
  let buttonText = ''
  buttonText = e.target.textContent
  if (UI.TEXT.textContent === 'O') {
    UI.TEXT.textContent = ''
  }
  UI.TEXT.textContent += buttonText
  console.log(UI.TEXT.textContent)
}

function clearResultText() {
  UI.TEXT.textContent = '0'
}

function deleteLastDigit() {}
