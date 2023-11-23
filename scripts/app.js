
import LessonModel from './models/LessonModel.js'
import WelcomeScreenView from './views/WelcomeScreenView.js'
import TaskScreenView from './views/TaskScreenView.js'
import CheckDialogView from './views/CheckDialogView.js'
import ResultScreenView from './views/ResultScreenView.js'
import AnswersDialogView from './views/AnswersDialogView.js'

const lessonModel = new LessonModel()
const welcomeScreenView = new WelcomeScreenView()
const taskScreenView = new TaskScreenView()
const resultScreenView = new ResultScreenView()
const checkDialogView = new CheckDialogView()
const answersDialogView = new AnswersDialogView()

let currentLesson
let currentTask = 0
let answerLog = []

const isCorrect = (userAnswer, task) => {
    if(userAnswer == task.correctAnswer) {
        return true
    } else {
        return false
    }
}

const handleStartBtn = () => {
    taskScreenView.render()
    taskScreenView.renderTask(currentLesson.tasks[currentTask])
}

const handleCheckBtn = (answer) => {
    const thisTask = currentLesson.tasks[currentTask]
    const isAnswerCorrect = isCorrect(answer, thisTask)

    answerLog.push({
        type: thisTask.type,
        correctAnswer: `${thisTask.word} - ${thisTask.correctAnswer}`,
        userAnswer: answer,
        correct: isAnswerCorrect,
    })

    checkDialogView.setDialog(isAnswerCorrect, `${thisTask.word} - ${thisTask.correctAnswer}`)
    checkDialogView.toggleDialog(true)
}

const handleNextBtn = () => {
    currentTask += 1
    if(currentTask >= currentLesson.tasks.length) {
        resultScreenView.render()
        checkDialogView.toggleDialog(false)
        console.log(answerLog)
        return
    } else {
        checkDialogView.toggleDialog(false)
        taskScreenView.renderTask(currentLesson.tasks[currentTask])
    }
}

const handleViewAnswersBtn = () => {
    answersDialogView.setDialog(answerLog)
    answersDialogView.toggleDialog(true)
}

const handleCloseAnswersBtn = () => {
    answersDialogView.toggleDialog(false)
}

const handleAgainBtn = () => {
    currentTask = 0
    answerLog = []
    welcomeScreenView.render(currentLesson.title, lessonModel.getWordsFromLesson(currentLesson))
}

const start = async () => {
    const lesson = await lessonModel.getLesson('2')
    currentLesson = lesson

    const words = lessonModel.getWordsFromLesson(lesson)
    welcomeScreenView.render(lesson.title, words)
    welcomeScreenView.bindStartBtn(handleStartBtn)
    taskScreenView.bindCheckBtn(handleCheckBtn)
    checkDialogView.bindNextBtn(handleNextBtn)
    resultScreenView.bindViewAnswersBtn(handleViewAnswersBtn)
    resultScreenView.bindAgainBtn(handleAgainBtn)
    answersDialogView.bindCloseBtn(handleCloseAnswersBtn)
}

start()


