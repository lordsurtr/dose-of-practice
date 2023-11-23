import { clearContainer, createElement } from "./ViewHelpers.js"


class AnswersDialogView {
    constructor() {
        this.dialogContainer = createElement('div', ['dialog-container'])
        document.body.appendChild(this.dialogContainer)

        this.dialog = createElement('div', ['dialog'])
        this.dialogContainer.appendChild(this.dialog)

        this.header = createElement('h1', [], 'Твої відповіді')
        this.dialog.appendChild(this.header)

        this.answerContainer = createElement('div')
        this.dialog.appendChild(this.answerContainer)
        
        this.closeBtn = createElement('button', [], 'закрити')
        this.dialog.appendChild(this.closeBtn)
    }

    setDialog(answerLog) {
        clearContainer(this.answerContainer)
        answerLog.forEach(log => {
            const answerItem = createElement('div')

            const answerType = createElement('p', [], `#${log.type}`)
            answerItem.appendChild(answerType)

            const correctAnswer = createElement('h1', [], log.correctAnswer)
            answerItem.appendChild(correctAnswer)

            const userAnswer = createElement('h2', [], `Твоя відповідь: ${log.userAnswer}`)
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