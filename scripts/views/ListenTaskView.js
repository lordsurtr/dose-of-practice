
import { createElement } from "./ViewHelpers.js"

class ListenTaskView {
    constructor(container) {

        this.question = createElement('h1', ['task-question'])
        container.appendChild(this.question)

        this.playBtn = createElement('button', ['audio-play-btn'])
        container.appendChild(this.playBtn)
        
        let playIcon = createElement('img')
        playIcon.setAttribute('src', './assets/play-btn.svg')
        this.playBtn.appendChild(playIcon)

        this.textBox = createElement('textarea', ['write-task-field'])
        this.textBox.setAttribute('placeholder', 'пиши тут...')
        container.appendChild(this.textBox)

    }

    render(task) {
      let playing = false
      
      let msg = new SpeechSynthesisUtterance(task.text)
      msg.addEventListener('end', () => {
        playing = false
      })
      msg.lang = 'en-US'
      msg.voiceURI = 'native';

      window.speechSynthesis.speak(msg)
      playing = true

      this.question.textContent = 'Напиши те що чуєш'
      this.playBtn.addEventListener('click', () => {
        if(playing) {
          window.speechSynthesis.cancel()
          playing = false
        } else {
          window.speechSynthesis.speak(msg)
          playing = true
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
