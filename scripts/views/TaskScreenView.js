
import { createElement, clearContainer } from "./ViewHelpers.js"
import ProgressBarView from "./ProgressBarView.js"
import OptionsView from "./OptionsView.js"
import WriteView from "./WriteView.js"
import AssembleView from "./AssembleView.js"

class TaskScreenView {
  constructor() {
    this.app = document.querySelector('.app')
    this.screen = createElement('div', ['screen'])

    this.progressBar = new ProgressBarView()
    this.screen.appendChild(this.progressBar.get())

    this.taskContainer = createElement('div', ['task-container'])
    this.screen.appendChild(this.taskContainer)


    this.checkBtn = createElement('button', ['check-btn', 'action-button'], 'перевірити')
    this.screen.appendChild(this.checkBtn)

    this.userAnswer = ''
  }

  render(totalTasks) {
    clearContainer(this.app)
    this.app.appendChild(this.screen)
    this.progressBar.setTotalTasks(totalTasks)
    this.progressBar.updateProgress(0)
  }

  renderTask(task, taskNumber) {
    this.checkBtn.classList.remove('action-button--active')
    this.checkBtn.classList.remove('action-button--available')
    this.userAnswer = ''
    clearContainer(this.taskContainer)
    this.progressBar.updateProgress(taskNumber)
  
    this.question = createElement('h2', ['task-question'], task.question)
    this.taskContainer.appendChild(this.question)

    this.taskText = createElement('h1', ['question-highlight'], task.text)
    this.taskContainer.appendChild(this.taskText)

    this.taskHint = createElement('p', ['task-hint'], task.hint)
    this.taskContainer.appendChild(this.taskHint)

    if(task.type.includes('match')) {
      let optionContainer = new OptionsView(task.options, clickedOption => {
        this.userAnswer = clickedOption
        this.checkBtn.classList.add('action-button--active')
        this.checkBtn.classList.add('action-button--available')
      })
      this.taskContainer.appendChild(optionContainer.getElement())
    } else if (task.type.includes('write')) {
      let writeContainer = new WriteView(userInput => {
        this.userAnswer = userInput
        this.checkBtn.classList.add('action-button--active')
        this.checkBtn.classList.add('action-button--available')
      })
      this.taskContainer.appendChild(writeContainer.getElement())
    } else if (task.type.includes('assemble')){
      let assembleContainer = new AssembleView(task.assembled, userInput => {
        this.userAnswer = userInput
        this.checkBtn.classList.add('action-button--active')
        this.checkBtn.classList.add('action-button--available')
      })
      this.taskContainer.appendChild(assembleContainer.getElement())
    }

  }

  bindCheckBtn(handler) {
    this.checkBtn.addEventListener('click', () => {
      handler(this.userAnswer)
    })
  }
}

export default TaskScreenView
