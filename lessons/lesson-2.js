
import Lesson from "./Lesson.js";
import {FillMatchTask, FillWriteTask, IsCorrectTask, SentenceAssemble, TranslateMatchTask, TranslateWriteTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 2', [
  // new TranslateWriteTask(
  //   'laptop',
  //   'ноутбук',
  //   ['laptop', 'the laptop', 'a laptop']
  // ),
  // new FillMatchTask(
  //   'to kick out',
  //   'I got ____ __ of the university!',
  //   ['kicked out', 'kicked', 'kicked off'],
  //   ['kicked out'],
  //   'Мене вигнали з університету!'
  // ),
  // new TranslateMatchTask(
  //   'word',
  //   'word',
  //   ['слово', 'хуй', 'підар'],
  //   ['слово']
  // ),
  // new SentenceAssemble(
  //   'motherfucker',
  //   'Я тебе вб\'ю сволоч!',
  //   'I will kill you motherfucker',
  //   ['i will kill you motherfucker']
  // ),
  // new SentenceAssemble(
  //   'bastard',
  //   'Ах ти виблядок! Та я тебе зараз зарізу як свиню!',
  //   'You bastard! I will cut you like a pig!',
  //   ['you bastard i will cut you like a pig']
  // )
  new FillWriteTask(
    'test',
    'Do not ____ this application!',
    ['test'],
    'Не тестуй цю програму!'
  ),
  new IsCorrectTask(
    'to flunk',
    'you can\'t flunk me out of the university!',
    ['неправильно']
  )
])

export default lesson
