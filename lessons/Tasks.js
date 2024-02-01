export class Task {
  constructor(word, text, correctAnswers, hint) {
    this.type = 'no-type'
    this.word = word
    this.text = text
    this.correctAnswers = correctAnswers
    this.hint = hint
  }
}

export class TranslateMatchTask extends Task {
  constructor(word, text, options, correctAnswers, hint ) {
    super(word, text, correctAnswers, hint)
    this.type = 'translate-match'
    this.question = 'Переклади:'
    this.options = options
  }
}

export class FillMatchTask extends Task {
  constructor(word, text, options, correctAnswers, hint) {
    super(word, text, correctAnswers, hint)
    this.type = 'fill-match'
    this.question = 'Заповни пропуск:'
    this.options = options
  }
}

export class TranslateWriteTask extends Task {
  constructor(word, text, correctAnswers, hint) {
    super(word, text, correctAnswers, hint)
    this.type = 'translate-write'
    this.question = 'Напиши переклад:'
  }
}

export class IsCorrectTask extends Task {
  constructor(word, text, correctAnswers, hint) {
    super(word, text, correctAnswers, hint)
    this.type = 'correct-match'
    this.question = 'Чи це речення є правильним: '
    this.options = ['правильно', 'неправильно']
  }
}

export class FillWriteTask extends Task {
  constructor(word, text, correctAnswers, hint) {
    super(word, text, correctAnswers, hint)
    this.type = 'fill-write'
    this.question = 'Заповни пропуск:'
  }
}

export class SentenceAssemble extends Task {
  constructor(word, text, assembled, correctAnswers, hint) {
    super(word, text, correctAnswers, hint)
    this.assembled = assembled
    this.type = 'sentence-assemble'
    this.question = 'Склади це речення:'
  }
}

// export class Task {
//   constructor(word, correctAnswers, checkText) {
//     this.type = 'no-type'
//     this.word = word
//     this.correctAnswers = correctAnswers
//     this.checkText = checkText
//   }

//   getAutoCheckText() {
//     switch(this.type) {
//       case 'listen': {
//         return `${this.text} - ${this.translation}`
//       }
//       default: {
//         return `${this.questionWord} - ${this.correctAnswers[0]}`
//       }
//     }
//   }

//   getAnswerView() {
//     switch(this.type) {
//       case 'listen': {}
//       case 'fill': {}
//       case 'fill-match': {
//         return {
//           auxilary: this.text,
//           answer: this.correctAnswers[0]
//         }
//       }
//       default: {
//         return {
//           answer: `${this.correctAnswers[0]}`
//         }
//       }
//     }
//   }
// }

// export class MatchTask extends Task{
//   constructor(word, questionWord, options, correctAnswers, checkText) {
//     super(word, correctAnswers, checkText)
//     this.type = 'match'
//     this.questionWord = questionWord
//     this.options = options
//   }
// }

// export class WriteTask extends Task {
//   constructor(word, questionWord, correctAnswers, checkText) {
//     super(word, correctAnswers, checkText)
//     this.type = 'write'
//     this.questionWord = questionWord
//   }
// }

// export class ListenTask extends Task {
//   constructor(word, text, translation, correctAnswers, checkText) {
//     super(word, correctAnswers, checkText)
//     this.type = 'listen'
//     this.text = text
//     this.translation = translation
//   }
// }

// export class FillTask extends Task {
//   constructor(word, text, correctAnswers, checkText) {
//     super(word, correctAnswers, checkText)
//     this.type = 'fill'
//     this.text = text
//   }
// }

// export class FillMatchTask extends Task {
//   constructor(word, text, options, correctAnswers, checkText) {
//     super(word, correctAnswers, checkText)
//     this.type = 'fill-match'
//     this.options = options
//     this.text = text
//   }
// }

// export class IsCorrectTask extends Task {
//   constructor(word, sentence, correctAnswers, checkText) {
//     super(word, correctAnswers, checkText) 
//     this.type = 'is-correct'
//     this.sentence = sentence
//     this.options = ['правильно', 'неправильно']
//   }
// }