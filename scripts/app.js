
import LessonModel from './models/LessonModel.js'
import WelcomeScreenView from './views/WelcomeScreenView.js'
import TaskScreenView from './views/TaskScreenView.js'
import CheckDialogView from './views/CheckDialogView.js'
import ResultScreenView from './views/ResultScreenView.js'
import AnswersDialogView from './views/AnswersDialogView.js'
import { shuffleArray } from './Helpers.js'

const lessonModel = new LessonModel()
const welcomeScreenView = new WelcomeScreenView()
const taskScreenView = new TaskScreenView()
const resultScreenView = new ResultScreenView()
const checkDialogView = new CheckDialogView()
const answersDialogView = new AnswersDialogView()

let currentLesson
let currentTask = 0
let answerLog = []
let currentTasks = []

const isCorrect = (userAnswer, task) => {
    if(task.correctAnswers.includes(userAnswer.toLowerCase())) {
        return true
    } else {
        return false
    }
}

const handleStartBtn = () => {
    currentTasks = shuffleArray(currentLesson.tasks)
    taskScreenView.render()
    console.log(currentTasks)
    taskScreenView.renderTask(currentTasks[currentTask])
}

const handleCheckBtn = (answer) => {
    const thisTask = currentTasks[currentTask]
    const isAnswerCorrect = isCorrect(answer, thisTask)

    answerLog.push({
        type: thisTask.type,
        correctAnswer: `${thisTask.word} - ${thisTask.correctAnswers[0]}`,
        userAnswer: answer,
        correct: isAnswerCorrect,
    })

    checkDialogView.setDialog(isAnswerCorrect, `${thisTask.questionWord} - ${thisTask.correctAnswers[0]}`)
    checkDialogView.toggleDialog(true)
}

const handleNextBtn = () => {
    currentTask += 1
    if(currentTask >= currentTasks.length) {
        resultScreenView.render()
        checkDialogView.toggleDialog(false)
        return
    } else {
        checkDialogView.toggleDialog(false)
        taskScreenView.renderTask(currentTasks[currentTask])
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

const handleIncludeListeningExercisesSwitchToggle = (on) => {
    console.log(on)
}


const start = async () => {
    const lesson = await lessonModel.getLesson('1')
    currentLesson = lesson

    const words = lessonModel.getWordsFromLesson(lesson)

    welcomeScreenView.render(lesson.title, words)
    welcomeScreenView.bindStartBtn(handleStartBtn)
    welcomeScreenView.bindIncludeListeningExercisesSwitchToggle(handleIncludeListeningExercisesSwitchToggle)

    taskScreenView.bindCheckBtn(handleCheckBtn)

    checkDialogView.bindNextBtn(handleNextBtn)

    resultScreenView.bindViewAnswersBtn(handleViewAnswersBtn)
    resultScreenView.bindAgainBtn(handleAgainBtn)

    answersDialogView.bindCloseBtn(handleCloseAnswersBtn)
}

start()


