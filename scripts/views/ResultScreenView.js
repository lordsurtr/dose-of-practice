import { getPercentage } from "../Helpers.js"
import { createElement, clearContainer } from "./ViewHelpers.js"


class ResultScreenView {
  constructor() {
    this.app = document.querySelector('.app')
    this.screen = createElement('div', ['screen', 'result-screen'])

    this.textGroup = createElement('div', ['result-text-group'])
    this.screen.appendChild(this.textGroup)

    this.icon = createElement('img', ['result-icon'])
    this.textGroup.appendChild(this.icon)

    this.header = createElement('h1', ['result-header'], 'Ідеально!')
    this.textGroup.appendChild(this.header)

    this.scoreElem = createElement('p', ['result-score'], '9/10')
    this.textGroup.appendChild(this.scoreElem)

    this.viewAnswersBtn = createElement('button', ['action-button', 'action-button--active', 'action-button--correct', 'view-answers-button'], 'переглянути відповіді')
    this.screen.appendChild(this.viewAnswersBtn)

    this.againBtn = createElement('button', ['action-button', 'action-button--active', 'action-button--available', 'again-button'], 'ще раз')
    this.screen.appendChild(this.againBtn)

  }

  bindViewAnswersBtn(handler) {
    this.viewAnswersBtn.addEventListener('click', () => {
      handler()
    })
  }

  bindAgainBtn(hanlder) {
    this.againBtn.addEventListener('click', () => {
      hanlder()
    })
  }

  render(rightAnswerCount, totalTaskCount) {
    clearContainer(this.app)
    const percentageOfCorrectAnswers = getPercentage(rightAnswerCount, totalTaskCount)

    if(percentageOfCorrectAnswers == 100) {
      this.header.textContent = 'Ідеально!'
      this.icon.setAttribute('src', '/assets/star-icon.svg')
    } else if (percentageOfCorrectAnswers >= 90) {
      this.header.textContent = 'Чудово!'
      this.icon.setAttribute('src', '/assets/Fire-icon.svg')
    } else if (percentageOfCorrectAnswers >= 50) {
      this.header.textContent = 'Не погано'
      this.icon.setAttribute('src', '/assets/Heard-icon.svg')
    } else {
      this.header.textContent = 'Є над чим працювати'
      this.icon.setAttribute('src', '/assets/pen-icon.svg')
    }

    this.app.appendChild(this.screen)
    this.scoreElem.textContent = `${rightAnswerCount} / ${totalTaskCount}`   
  }
}

export default ResultScreenView
