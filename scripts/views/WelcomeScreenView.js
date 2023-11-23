
import { createElement, clearContainer } from "./ViewHelpers.js"

class WelcomeScreenView {
    constructor() {
        this.app = document.querySelector('.app')
        this.screen = createElement('div', ['screen'])

        this.header = createElement('h1', ['header'])
        this.screen.appendChild(this.header)

        this.wordContainer = createElement('div')
        this.screen.appendChild(this.wordContainer)

        this.startBtn = createElement('button', [], 'почнімо')
        this.screen.appendChild(this.startBtn)

    }

    bindStartBtn(handler) {
        this.startBtn.addEventListener('click', () => {
            handler()
        })
    }

    render(title, words) {
        clearContainer(this.app)
        this.header.textContent = title
        this.app.appendChild(this.screen)
    }
}

export default WelcomeScreenView