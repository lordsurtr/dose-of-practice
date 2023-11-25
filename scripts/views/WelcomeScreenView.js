
import { createElement, clearContainer } from "./ViewHelpers.js"

class WelcomeScreenView {
    constructor() {
        this.app = document.querySelector('.app')
        this.screen = createElement('div', ['screen'])

        this.header = createElement('h1', ['welcome-header'])
        this.screen.appendChild(this.header)

        this.chooseWordsText = createElement('p', ['small-text'], 'вибери слова для практики:')
        this.screen.appendChild(this.chooseWordsText)

        this.wordContainer = createElement('div', ['word-container'])
        this.screen.appendChild(this.wordContainer)

        // TODO: move the switch into a seperate component
        this.allWordsContainer = createElement('div', ['switch-container'])
        this.allWordsSwitch = createElement('label', ['switch'])
        this.allWordsSwitchInput = createElement('input')
        this.allWordsSwitchInput.setAttribute('type', 'checkbox')
        this.allWordsSwitch.appendChild(this.allWordsSwitchInput)
        this.allWordsSwitchSlider = createElement('span', ['slider'])
        this.allWordsSwitch.appendChild(this.allWordsSwitchSlider)
        this.allWordsContainer.appendChild(this.allWordsSwitch)

        this.allWordsSwitchText = createElement('p', ['switch-text'], 'вибрати всі слова')
        this.allWordsContainer.appendChild(this.allWordsSwitchText)

        this.screen.appendChild(this.allWordsContainer)

        this.startBtn = createElement('button', ['action-button', 'welcome-start-button'], 'почнімо')
        this.screen.appendChild(this.startBtn)

    }

    bindStartBtn(handler) {
        this.startBtn.addEventListener('click', () => {
            handler()
        })
    }

    render(title, words) {
        clearContainer(this.app)
        clearContainer(this.wordContainer)
        this.header.textContent = title
        this.app.appendChild(this.screen)

        words.forEach(word => {
            const wordElem = createElement('button', ['word'], word)
            this.wordContainer.appendChild(wordElem)
        })
    }
}

export default WelcomeScreenView