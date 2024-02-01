import { shuffleArray } from "../Helpers.js";
import { createElement } from "./ViewHelpers.js";


export default class AssembleView {
    constructor(sentence, onUserInput) {
        this.container = createElement('div', ['assemble-container'])

        this.answerHeader = createElement('p', ['small-text', ['assemble-answer-header']], 'складене речення:')
        this.container.appendChild(this.answerHeader)

        this.answerContainer = createElement('div', ['assemble-answer-container'])
        this.container.appendChild(this.answerContainer)

        this.optionHeader = createElement('p', ['small-text', 'assemble-option-header'], 'слова:')
        this.container.appendChild(this.optionHeader)

        this.optionContainer = createElement('div', ['assemble-option-container'])
        this.container.appendChild(this.optionContainer)

        shuffleArray(this._splitSentence(sentence)).forEach(word => {
            let wordElem = createElement('button', ['assemble-option', 'assemble-option--visible'], word)
            
            wordElem.addEventListener('click', () => {
                wordElem.classList.remove('assemble-option--visible')

                let answerElem = createElement('button', ['assemble-answer'], word)
                answerElem.addEventListener('click', () => {
                    answerElem.remove()
                    wordElem.classList.add('assemble-option--visible')
                })
                this.answerContainer.appendChild(answerElem)

                onUserInput(this._getStringFromAnswers())
            })

            this.optionContainer.appendChild(wordElem)

            
        })
    }

    _getStringFromAnswers() {
        let str = ''
        Array.from(this.answerContainer.children).forEach(answer => {
            str += answer.textContent + ' '
        })
        return str
    }

    _splitSentence(sentence) {
        return sentence.split(' ')
    }

    getElement() {
        return this.container
    }
}