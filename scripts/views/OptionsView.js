import { createElement } from "./ViewHelpers.js";
import { shuffleArray } from "../Helpers.js";

export default class OptionsView {
    constructor(options, onOptionSelect) {
        this.optionContainer = createElement('div', ['option-container'])

        console.log(options)

        shuffleArray(options).forEach(option => {
            const optionBtn = createElement('button', ['option-btn'], option)
            const optionIndicator = createElement('div', ['option-indicator'])
            optionBtn.appendChild(optionIndicator)
            
            optionBtn.addEventListener('click', () => {
                onOptionSelect(option)
                this._deactivateAllOptions()
                optionBtn.classList.add('option--active')
            })

            this.optionContainer.appendChild(optionBtn)
        })
    }

    _deactivateAllOptions() {
      for(let child of this.optionContainer.children) {
        child.classList.remove('option--active')  
      }    
    }

    getElement() {
        return this.optionContainer
    }
}