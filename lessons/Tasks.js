
export class Task {
    constructor(type, word, correctAnswers) {
        this.type = type
        this.word = word
        this.correctAnswers = correctAnswers
    }
}

export class MatchTask extends Task{
    constructor(type, word, questionWord, options, correctAnswers) {
        super(type, word, correctAnswers)
        this.questionWord = questionWord
        this.options = options
    }
}

export class WriteTask extends Task {
    constructor(type, word, questionWord, correctAnswers) {
        super(type, word, correctAnswers)
        this.questionWord = questionWord
    }
}

export class ListenTask extends Task {
    constructor(type, word, audioLink, correctAnswers) {
        super(type, word, correctAnswers)
        this.audioLink = audioLink
    }
}