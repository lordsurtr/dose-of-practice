
import { createElement } from "./ViewHelpers.js"

class WriteTaskView {
    constructor(container) {

        this.question = createElement('h1', ['task-question'])
        container.appendChild(this.question)

        this.textBox = createElement('textarea', ['write-task-field'])
        this.textBox.setAttribute('placeholder', 'пиши тут...')
        container.appendChild(this.textBox)

    }

    render(task) {
        this.question.innerHTML = `Як сказати <span class="question-highlight">${task.questionWord}</span> англійською?`
    }

    bindAnswer(handler) {

        this.textBox.addEventListener('input', () => {
            const value = this.textBox.value
            handler(value)
        })
    }
}

export default WriteTaskView
