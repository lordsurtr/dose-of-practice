
import { createElement } from "./ViewHelpers.js"

class FillTaskView {
    constructor(container) {

        this.question = createElement('h1', ['task-question'])
        container.appendChild(this.question)

        this.textBox = createElement('textarea', ['write-task-field'])
        this.textBox.setAttribute('placeholder', 'пиши тут...')
        container.appendChild(this.textBox)

    }

    render(task) {
      this.question.textContent = `${task.text}`
      this.question.innerHTML = `Заповни пропуск: <br><span class="question-highlight">${task.text}</span>`
    }

    bindAnswer(handler) {

        this.textBox.addEventListener('input', () => {
            const value = this.textBox.value
            handler(value)
        })
    }
}

export default FillTaskView
