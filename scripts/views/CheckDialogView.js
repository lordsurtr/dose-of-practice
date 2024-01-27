import { createElement } from "./ViewHelpers.js"


class CheckDialogView {
  constructor() {
    this.dialogContainer = createElement('div', ['dialog-container'])
    document.body.appendChild(this.dialogContainer)

    this.dialog = createElement('div', ['dialog', 'check-dialog'])
    this.dialogContainer.appendChild(this.dialog)

    this.header = createElement('h1', ['check-dialog-header'])
    this.dialog.appendChild(this.header)

    this.answerElem = createElement('p', ['check-dialog-answer'])
    this.dialog.appendChild(this.answerElem)

    this.btn = createElement('button', ['action-button', 'check-dialog-btn', 'action-button--active'], 'next')
    this.dialog.appendChild(this.btn)

    this.player = new Audio()
  }

  setDialog(isCorrect, answer) {
    if(isCorrect == 'correct') {
      this.dialog.classList.remove('check-dialog--wrong')
      this.dialog.classList.add('check-dialog--correct')
      this.player.src = './assets/success.mp3'
      this.header.textContent = 'Правильно!'
    } else if (isCorrect == 'incorrect'){
      this.dialog.classList.remove('check-dialog--correct')  
      this.dialog.classList.add('check-dialog--wrong')
      this.player.src = './assets/mistake.mp3'
      this.header.textContent = 'Неправильно :('
    } else {
      this.dialog.classList.remove('check-dialog--wrong')
      this.dialog.classList.add('check-dialog--correct')
      this.player.src = './assets/success.mp3'
      this.header.textContent = 'Майже!'
    }
    this.answerElem.textContent = answer
  }

  toggleDialog(on) {
    if(on) {
      this.dialogContainer.classList.add('dialog--active')
      this.player.play()
    } else {
      this.dialogContainer.classList.remove('dialog--active')
    }
  }

  bindNextBtn(handler) {
    this.btn.addEventListener('click', () => {
      handler()
    })
  }
}

export default CheckDialogView
