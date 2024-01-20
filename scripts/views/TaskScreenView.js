
import { createElement, clearContainer } from "./ViewHelpers.js"
import MatchTaskView from "./MatchTaskView.js"
import WriteTaskView from "./WriteTaskView.js"
import ProgressBarView from "./ProgressBarView.js"

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
        this.userAnswer = ''
        clearContainer(this.taskContainer)
        this.progressBar.updateProgress(taskNumber)
        switch(task.type) {
            case 'match': {
                const matchTaskView = new MatchTaskView(this.taskContainer)
                matchTaskView.render(task)
                matchTaskView.bindAnswer((answer) => {
                    this.userAnswer = answer
                    this.checkBtn.classList.add('action-button--active')
                })
                break
            }
            case 'write': {
                const writeTaskView = new WriteTaskView(this.taskContainer)
                writeTaskView.render(task)
                writeTaskView.bindAnswer((answer) => {
                    this.userAnswer = answer
                })
            }
        }
    }

    bindCheckBtn(handler) {
        this.checkBtn.addEventListener('click', () => {
            handler(this.userAnswer)
        })
    }
}

export default TaskScreenView
