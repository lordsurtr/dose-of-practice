
export class Task {
  constructor(word, correctAnswers, checkText) {
    this.type = 'no-type'
    this.word = word
    this.correctAnswers = correctAnswers
    this.checkText = checkText
  }

  getAutoCheckText() {
    switch(this.type) {
      case 'listen': {
        return `${this.text} - ${this.translation}`
      }
      default: {
        return `${this.word} - ${this.correctAnswers[0]}`
      }
    }
  }
}

export class MatchTask extends Task{
  constructor(word, questionWord, options, correctAnswers, checkText) {
    super(word, correctAnswers, checkText)
    this.type = 'match'
    this.questionWord = questionWord
    this.options = options
  }
}

export class WriteTask extends Task {
  constructor(word, questionWord, correctAnswers, checkText) {
    super(word, correctAnswers, checkText)
    this.type = 'write'
    this.questionWord = questionWord
  }
}

export class ListenTask extends Task {
  constructor(word, text, translation, correctAnswers, checkText) {
    super(word, correctAnswers, checkText)
    this.type = 'listen'
    this.text = text
    this.translation = translation
  }
}

export class FillTask extends Task {
  constructor(word, text, correctAnswers, checkText) {
    super(word, correctAnswers, checkText)
    this.type = 'fill'
    this.text = text
  }
}
