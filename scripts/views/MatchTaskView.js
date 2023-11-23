
import { createElement } from "./ViewHelpers.js"

class MatchTaskView {
    constructor(container) {

        this.question = createElement('h1')
        container.appendChild(this.question)

        this.optionContainer = createElement('div')
        container.appendChild(this.optionContainer)

    }

    render(task) {
        this.question.textContent = `Що означає ${task.word}?`
        task.options.forEach(option => {
            const optionBtn = createElement('button', [], option)
            this.optionContainer.appendChild(optionBtn)
        })
    }

    bindAnswer(handler) {

        for(let child of this.optionContainer.children) {
            child.addEventListener('click', () => {
                handler(child.textContent)
            })
        }
    }
}

export default MatchTaskView