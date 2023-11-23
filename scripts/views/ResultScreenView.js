import { createElement, clearContainer } from "./ViewHelpers.js"


class ResultScreenView {
    constructor() {
        this.app = document.querySelector('.app')
        this.screen = createElement('div', ['screen'])

        this.header = createElement('h1', [], 'Ідеально!')
        this.screen.appendChild(this.header)

        this.scoreElem = createElement('p', [], '9/10')
        this.screen.appendChild(this.scoreElem)

        this.viewAnswersBtn = createElement('button', [], 'переглянути відповіді')
        this.screen.appendChild(this.viewAnswersBtn)

        this.againBtn = createElement('button', [], 'ще раз')
        this.screen.appendChild(this.againBtn)

    }

    bindViewAnswersBtn(handler) {
        this.viewAnswersBtn.addEventListener('click', () => {
            handler()
        })
    }

    bindAgainBtn(hanlder) {
        this.againBtn.addEventListener('click', () => {
            hanlder()
        })
    }

    render(rightAnswerCount, totalTaskCount) {
        clearContainer(this.app)
        this.header.textContent = 'Белліссімо!'
        this.app.appendChild(this.screen)
    }
}

export default ResultScreenView