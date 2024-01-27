import { createElement } from "./ViewHelpers.js";

class ProgressBarView {
  constructor(totalTasks) {
    this.barContainer = createElement('div', ['progress-bar-container'])

    this.text = createElement('h1', ['progress-bar-text'], `0/${totalTasks}`)
    this.barContainer.appendChild(this.text)
    
    this.progressBar = createElement('div', ['progress-bar'])
    this.barContainer.appendChild(this.progressBar)

    this.line = createElement('div', ['progress-bar-line'])
    this.progressBar.appendChild(this.line)

    this.bar = createElement('div', ['progress-bar-progress'])
    this.progressBar.appendChild(this.bar)

    this.totalTasks = totalTasks

  }

  get() {
    return this.barContainer
  }

  updateProgress(tasksCompleted) {
    this.text.textContent = `${tasksCompleted}/${this.totalTasks}`
    this.bar.style.width = `${(tasksCompleted * 100) / this.totalTasks}%`
  }

  setTotalTasks(totalTasks) {
    this.totalTasks = totalTasks
  }
}

export default ProgressBarView
