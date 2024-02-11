
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

        // this.includeListeningExercisesSwitchView = new SwitchView('вправи з аудіо', true)
        // this.screen.appendChild(this.includeListeningExercisesSwitchView.get())

        this.difficultyText = createElement('p', ['small-text'], 'складність:')
        this.screen.appendChild(this.difficultyText)

        this.easySwitchView = new SwitchView('легко', false)
        this.screen.appendChild(this.easySwitchView.get())

        this.mediumSwitchView = new SwitchView('нормально', true)
        this.screen.appendChild(this.mediumSwitchView.get())

        this.hardSwitchView = new SwitchView('важко', false)
        this.screen.appendChild(this.hardSwitchView.get())

        this.allSwitchView = new SwitchView('всі завдання', false)
        this.screen.appendChild(this.allSwitchView.get())

        this.startBtn = createElement('button', ['action-button', 'welcome-start-button', 'action-button--active', 'action-button--available'], 'почнімо')
        this.screen.appendChild(this.startBtn)

    }

    bindDifficultyModeSwitchButtons(handler) {
        this.easySwitchView.bindToggle((checked) => {
            if(checked == true) {
                handler('easy')
                this.mediumSwitchView.toggle(false)
                this.hardSwitchView.toggle(false)
                this.allSwitchView.toggle(false)
            } else {
                handler('medium')
                this.mediumSwitchView.toggle(true)
            }
        })
        this.mediumSwitchView.bindToggle(checked => {
            if(checked == true) {
                handler('medium')
                this.easySwitchView.toggle(false)
                this.hardSwitchView.toggle(false)
                this.allSwitchView.toggle(false)
            } else {
                handler('hard')
                this.hardSwitchView.toggle(true)
            }
        })
        this.hardSwitchView.bindToggle(checked => {
            if(checked == true) {
                handler('hard')
                this.easySwitchView.toggle(false)
                this.mediumSwitchView.toggle(false)
                this.allSwitchView.toggle(false)
            } else {
                handler('all')
                this.allSwitchView.toggle(true)
            }
        })
        this.allSwitchView.bindToggle(checked => {
            if(checked == true) {
                handler('all')
                this.easySwitchView.toggle(false)
                this.mediumSwitchView.toggle(false)
                this.hardSwitchView.toggle(false)
            } else {
                handler('easy')
                this.easySwitchView.toggle(true)
            }
        })
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
