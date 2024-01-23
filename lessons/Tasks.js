
export class Task {
  constructor(type, word, correctAnswers, checkText) {
    this.type = type
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
  constructor(type, word, questionWord, options, correctAnswers, checkText) {
    super(type, word, correctAnswers, checkText)
    this.questionWord = questionWord
    this.options = options
  }
}

export class WriteTask extends Task {
  constructor(type, word, questionWord, correctAnswers, checkText) {
    super(type, word, correctAnswers, checkText)
    this.questionWord = questionWord
  }
}

export class ListenTask extends Task {
  constructor(type, word, text, translation, correctAnswers, checkText) {
    super(type, word, correctAnswers, checkText)
    this.text = text
    this.translation = translation
  }
}
