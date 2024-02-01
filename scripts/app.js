
import LessonModel from './models/LessonModel.js'
import WelcomeScreenView from './views/WelcomeScreenView.js'
import CheckDialogView from './views/CheckDialogView.js'
import ResultScreenView from './views/ResultScreenView.js'
import AnswersDialogView from './views/AnswersDialogView.js'
import { calculateSpellingDistance, filterTasks, removePunctuation, shuffleTasksByDifficulty , removeDoubleSpaces, shuffleArray} from './Helpers.js'
import TaskScreenView from './views/TaskScreenView.js'

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
let includeListeningExercises = true

const isCorrect = (userAnswer, task) => {
  let cleanAnswer = removeDoubleSpaces(removePunctuation(userAnswer.toLowerCase().trim()))
  let correct = 'incorrect'
  let maxMistakes = task.type.includes('match') ? 0 : 1

  task.correctAnswers.forEach(ans => {
    let spellingDistance = calculateSpellingDistance(ans, cleanAnswer)
    if(spellingDistance  == 0) {
      correct = 'correct'
      return
    } else if (spellingDistance <= maxMistakes) {
      correct = 'almost'
      return
    }
  })

  return correct
}

const handleStartBtn = () => {

  // currentTasks = shuffleTasksByDifficulty(currentLesson.tasks)
  currentTasks = shuffleArray(currentLesson.tasks)
  if(!includeListeningExercises) {
    currentTasks = filterTasks(currentTasks, 'listen')
  }
  taskScreenView.render(currentTasks.length)
  console.log(currentTasks)
  taskScreenView.renderTask(currentTasks[currentTask], currentTask)
}

const handleCheckBtn = (answer) => {
  const thisTask = currentTasks[currentTask]
  const isAnswerCorrect = isCorrect(answer, thisTask)

  answerLog.push({
    type: thisTask.type,
    question: thisTask.question,
    text: thisTask.text,
    correctAnswer: thisTask.correctAnswers[0],
    userAnswer: answer,
    correct: isAnswerCorrect,
  })

  checkDialogView.setDialog(isAnswerCorrect, thisTask.checkText)
  if(thisTask.checkText) {
    checkDialogView.setDialog(isAnswerCorrect, thisTask.checkText)
  } else {
    checkDialogView.setDialog(isAnswerCorrect, thisTask.correctAnswers[0])
  }
  checkDialogView.toggleDialog(true)
}

const handleNextBtn = () => {
  currentTask += 1
  if(currentTask >= currentTasks.length) {
    resultScreenView.render(
      answerLog.filter(log => log.correct == 'correct' || log.correct == 'almost').length,
      currentTasks.length
    )
    checkDialogView.toggleDialog(false)
    return
  } else {
    checkDialogView.toggleDialog(false)
    taskScreenView.renderTask(currentTasks[currentTask], currentTask)
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
  includeListeningExercises = on
}


const start = async () => {
  const lesson = await lessonModel.getLesson('2')
  currentLesson = lesson

  const words = lessonModel.getWordsFromLesson(lesson)

  welcomeScreenView.render(lesson.title, words)
  welcomeScreenView.bindStartBtn(handleStartBtn)
  // welcomeScreenView.bindIncludeListeningExercisesSwitchToggle(handleIncludeListeningExercisesSwitchToggle)
  welcomeScreenView.bindDifficultyModeSwitchButtons(mode => {
    console.log(mode)
  })

  taskScreenView.bindCheckBtn(handleCheckBtn)

  checkDialogView.bindNextBtn(handleNextBtn)

  resultScreenView.bindViewAnswersBtn(handleViewAnswersBtn)
  resultScreenView.bindAgainBtn(handleAgainBtn)

  answersDialogView.bindCloseBtn(handleCloseAnswersBtn)
}

start()


