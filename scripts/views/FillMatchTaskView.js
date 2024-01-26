
import { createElement } from "./ViewHelpers.js"
import { shuffleArray } from "../Helpers.js"

class FillMatchTaskView {
  constructor(container) {

    this.question = createElement('h1', ['task-question'])
    container.appendChild(this.question)

    this.optionContainer = createElement('div', ['option-container'])
    container.appendChild(this.optionContainer)


  }

  render(task) {
    this.question.textContent = `${task.text}`
    this.question.innerHTML = `Заповни пропуск: <br><span class="question-highlight">${task.text}</span>`

    shuffleArray(task.options).forEach(option => {
      const optionBtn = createElement('button', ['option-btn'], option)
      const optionIndicator = createElement('div', ['option-indicator'])
      optionBtn.appendChild(optionIndicator)
      this.optionContainer.appendChild(optionBtn)
    })
  }

  deactivateAllOptions() {
    for(let child of this.optionContainer.children) {
      child.classList.remove('option--active')  
    }    
  }

  bindAnswer(handler) {
    for(let child of this.optionContainer.children) {
      child.addEventListener('click', () => {
        handler(child.textContent)
        this.deactivateAllOptions()
        child.classList.add('option--active')
      })
    }
  }

}

export default FillMatchTaskView