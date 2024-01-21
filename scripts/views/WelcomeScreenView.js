
import { createElement, clearContainer } from "./ViewHelpers.js"
import SwitchView from "./SwitchView.js"

class WelcomeScreenView {
    constructor() {
        this.app = document.querySelector('.app')
        this.screen = createElement('div', ['screen'])

        this.header = createElement('h1', ['welcome-header'])
        this.screen.appendChild(this.header)

        this.chooseWordsText = createElement('p', ['small-text'], 'слова:')
        this.screen.appendChild(this.chooseWordsText)

        this.wordContainer = createElement('div', ['word-container'])
        this.screen.appendChild(this.wordContainer)

        this.includeListeningExercisesSwitchView = new SwitchView('вправи з аудіо', true)
        this.screen.appendChild(this.includeListeningExercisesSwitchView.get())

        this.startBtn = createElement('button', ['action-button', 'welcome-start-button', 'action-button--active', 'action-button--available'], 'почнімо')
        this.screen.appendChild(this.startBtn)

    }

    bindStartBtn(handler) {
        this.startBtn.addEventListener('click', () => {
            handler()
        })
    }

    bindIncludeListeningExercisesSwitchToggle(handler) {
        this.includeListeningExercisesSwitchView.bindToggle(handler)
    }

    bindWordToggle(handler) {
        for(const child of this.wordContainer.children) {
            child.addEventListener('click', () => {
                handler(child.textContent)
            })
        }
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
