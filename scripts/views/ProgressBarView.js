import { createElement } from "./ViewHelpers.js";

class ProgressBarView {
  constructor(totalTasks) {
    this.barContainer = createElement('div', ['progress-bar-container'])
    this.bar = createElement('div', ['progress-bar'])
    this.barContainer.appendChild(this.bar)
    this.totalTasks = totalTasks
    this.text = createElement('h1', ['progress-bar-text'], `0/${totalTasks}`)
    this.barContainer.appendChild(this.text)
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
