
import { createElement } from "./ViewHelpers.js"

class ListenTaskView {
  constructor(container) {

    this.question = createElement('h1', ['task-question'])
    container.appendChild(this.question)

    this.playBtn = createElement('button', ['audio-play-btn'])
    container.appendChild(this.playBtn)

    this.playIcon = createElement('img')
    this.playIcon.setAttribute('src', './assets/play-btn.svg')
    this.playBtn.appendChild(this.playIcon)

    this.textBox = createElement('textarea', ['write-task-field'])
    this.textBox.setAttribute('placeholder', 'пиши тут...')
    container.appendChild(this.textBox)

  }

  render(task) {

    let msg = new SpeechSynthesisUtterance(task.text)
    msg.lang = 'en-US'
    msg.voiceURI = 'native';

    window.speechSynthesis.speak(msg)
    this.playIcon.src = './assets/play-dark.svg'
    this.playIcon.classList.add('play-icon--playing')
    msg.addEventListener('end', () => {
      this.playIcon.src = './assets/play-btn.svg'
      this.playIcon.classList.remove('play-icon--playing')
    })

    this.question.textContent = 'Напиши те що чуєш'
    this.playBtn.addEventListener('click', () => {
      // window.speechSynthesis.speak(msg)
      // if(playing) {
      //   window.speechSynthesis.cancel()
      //   playing = false
      // } else {
      //   window.speechSynthesis.speak(msg)
      //   playing = true
      // }
      this.playIcon.src = './assets/play-dark.svg'
      this.playIcon.classList.add('play-icon--playing')
      if(!window.speechSynthesis.speaking) {
        window.speechSynthesis.speak(msg)
      }
    })
  }

  bindAnswer(handler) {

    this.textBox.addEventListener('input', () => {
      const value = this.textBox.value
      handler(value)
    })
  }
}

export default ListenTaskView
