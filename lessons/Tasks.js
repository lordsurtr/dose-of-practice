
export class Task {
    constructor(word, correctAnswers) {
        this.word = word
        this.correctAnswers = correctAnswers
    }
}

export class MatchTask extends Task{
    constructor(word, questionWord, options, correctAnswers) {
        super(word, correctAnswers)
        this.questionWord = questionWord
        this.options = options
    }
}

export class WriteTask extends Task {
    constructor(word, questionWord, correctAnswers) {
        super(word, correctAnswers)
        this.questionWord = questionWord
    }
}

export class ListenTask extends Task {
    constructor(word, audioLink, correctAnswers) {
        super(word, correctAnswers)
        this.audioLink = audioLink
    }
}