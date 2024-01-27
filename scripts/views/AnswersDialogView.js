import { clearContainer, createElement } from "./ViewHelpers.js"


class AnswersDialogView {
  constructor() {
    this.dialogContainer = createElement('div', ['dialog-container'])
    document.body.appendChild(this.dialogContainer)

    this.dialog = createElement('div', ['dialog', 'answers-dialog'])
    this.dialogContainer.appendChild(this.dialog)

    this.header = createElement('h1', ['answers-dialog-header'], 'Твої відповіді')
    this.dialog.appendChild(this.header)

    this.answerContainer = createElement('div', ['answers-container'])
    this.dialog.appendChild(this.answerContainer)

    this.closeBtn = createElement('button', ['action-button', 'action-button--available', 'action-button--active'], 'закрити')
    this.dialog.appendChild(this.closeBtn)
  }

  setDialog(answerLog) {
    clearContainer(this.answerContainer)
    answerLog.forEach(log => {
      const answerItem = createElement('div', ['answers-dialog-answer-item'])

      const answerType = createElement('p', ['answers-dialog-type'], `#${log.type}`)
      if(log.correct == 'correct') {
        answerType.textContent = `Правильно #${log.type}`
      } else if (log.correct == 'incorrect') {
        answerType.textContent = `Неправильно #${log.type}`
      } else {
        answerType.textContent = `Майже #${log.type}`
      }
      answerItem.appendChild(answerType)

      if(log.auxilaryInfo) {
        const auxilaryInfo = createElement('p', ['answers-dialog-auxilary'], log.auxilaryInfo)
        answerItem.appendChild(auxilaryInfo)
      }

      const correctAnswer = createElement('h2', ['answers-dialog-answer'])
      correctAnswer.innerHTML =  `Правильна відповідь: <span class="answers-dialog-highlight">${log.correctAnswer}</span>`
      answerItem.appendChild(correctAnswer)

      const userAnswer = createElement('h2', ['answers-dialog-user-answer'])
      userAnswer.innerHTML =  `Твоя відповідь: <span class=\"answers-dialog-highlight">${log.userAnswer}</span>`
      // userAnswer.classList.add(log.correct ? 'answers-dialog-correct-user-answer' : 'answers-dialog-wrong-user-answer')
      if(log.correct == 'correct' || log.correct == 'almost') {
        userAnswer.classList.add('answers-dialog-correct-user-answer' )
      } else {
        userAnswer.classList.add( 'answers-dialog-wrong-user-answer')
      }
      answerItem.appendChild(userAnswer)

      this.answerContainer.appendChild(answerItem)
    })
  }

  toggleDialog(on) {
    if(on) {
      this.dialogContainer.classList.add('dialog--active')
    } else {
      this.dialogContainer.classList.remove('dialog--active')
    }
  }

  bindCloseBtn(handler) {
    this.closeBtn.addEventListener('click', () => {
      handler()
    })
  }
}

export default AnswersDialogView
