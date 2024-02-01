import { createElement } from "./ViewHelpers.js"

export default class WriteView {
    constructor(onWrite) {
        this.textBox = createElement('textarea', ['write-task-field'])
        this.textBox.setAttribute('placeholder', 'пиши тут...')
        this.textBox.addEventListener('input', () => {
            const value = this.textBox.value
            onWrite(value)
        })
    }

    getElement() {
        return this.textBox
    }
}