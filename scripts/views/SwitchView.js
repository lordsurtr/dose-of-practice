
import { createElement } from "./ViewHelpers.js"

export default class SwitchView {
    constructor(text = '', on = false) {
        this.text = text
        this.on = on

        this.switchContainer = createElement('div', ['switch-container'])
        this.switch = createElement('label', ['switch'])

        this.switchInput = createElement('input')
        this.switchInput.setAttribute('type', 'checkbox')
        this.switchInput.checked = on
        this.switch.appendChild(this.switchInput)

        this.allWordsSwitchSlider = createElement('span', ['slider'])
        this.switch.appendChild(this.allWordsSwitchSlider)
        this.switchContainer.appendChild(this.switch)

        this.switchText = createElement('p', ['switch-text'], this.text)
        this.switchContainer.appendChild(this.switchText)
    }

    get() {
        return this.switchContainer
    }

    bindToggle(handler) {
        this.switchInput.addEventListener('input', () => {
            handler(this.switchInput.checked)
        })
    }
}