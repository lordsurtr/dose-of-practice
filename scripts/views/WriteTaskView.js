
import { createElement } from "./ViewHelpers.js"

class WriteTaskView {
    constructor(container) {

        this.question = createElement('h1')
        container.appendChild(this.question)

        this.textBox = createElement('textarea')
        container.appendChild(this.textBox)

    }

    render(task) {
        this.question.textContent = `Як перекласти ${task.questionWord}?`
    }

    bindAnswer(handler) {

        this.textBox.addEventListener('input', () => {
            const value = this.textBox.value
            handler(value)
        })
    }
}

export default WriteTaskView