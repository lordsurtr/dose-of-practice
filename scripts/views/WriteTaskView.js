
import { createElement } from "./ViewHelpers.js"

class WriteTaskView {
    constructor(container) {

        this.question = createElement('h1')
        container.appendChild(this.question)

        this.textBox = createElement('textarea')
        container.appendChild(this.textBox)

    }

    render(task) {
        this.question.textContent = `Як перекласти ${task.word}?`
    }

    bindAnswer(handler) {

        this.textBox.addEventListener('input', (e) => {
            const value = this.textBox.value
            handler(value)
        })
    }
}

export default WriteTaskView