import { createElement } from "./ViewHelpers.js"


class CheckDialogView {
    constructor() {
        this.dialogContainer = createElement('div', ['dialog-container'])
        document.body.appendChild(this.dialogContainer)

        this.dialog = createElement('div', ['dialog'])
        this.dialogContainer.appendChild(this.dialog)

        this.header = createElement('h1')
        this.dialog.appendChild(this.header)

        this.answerElem = createElement('p')
        this.dialog.appendChild(this.answerElem)
        
        this.btn = createElement('button', [], 'next')
        this.dialog.appendChild(this.btn)
    }

    setDialog(isCorrect, answer) {
        this.header.textContent = isCorrect ? 'Правильно!' : 'Неправильно :('
        this.answerElem.textContent = answer
    }

    toggleDialog(on) {
        if(on) {
            this.dialogContainer.classList.add('dialog--active')
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