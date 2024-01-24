
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask, FillTask, FillMatchTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 3', [
  new MatchTask(
    'to flunk',
    'to flunk',
    ['завалити (екзамен)', 'потонути', 'знищити'],
    ['завалити (екзамен)']
  ),
  new MatchTask(
    'wall',
    'wall',
    ['стіна', 'кімната', 'стіл'],
    ['стіна']
  ),
  new WriteTask(
    'to flunk',
    'завалити (екзамен)',
    ['to flunk', 'flunk']
  ),
  new WriteTask(
    'table',
    'стіл',
    ['table', 'the table', 'a table']
  ),
  new ListenTask(
    'to flunk',
    'How could he flunk me?',
    'Як він міг мене завалити?',
    ['how could he flunk me?', 'how could he flunk me.', 'how could he flunk me'],
    'Хииии лох)))',
  ),
  new ListenTask(
    'laptop',
    'I need a new laptop.',
    'Мені потрібен новий ноутбук',
    ['i need a new laptop', 'i need a new laptop!', 'i need a new laptop.']
  ),
  new FillMatchTask(
    'to flunk',
    'I will get kicked out of the university if I ____ this exam.',
    ['flunk', 'unsucceed', 'kill'],
    ['flunk'],
    'I will get kicked out of the university if I flunk this exam. - Мене виженуть з університету, якщо я завалю цей екзамен.'
  ),
  new FillMatchTask(
    'to lock',
    'Don\'t forget to ____ the door, so no one gets in.',
    ['lock', 'open', 'unlock'],
    ['lock'],
    'Don\'t forget to lock the door, so no one gets in. - Не забудь закрити двері, щоб ніхто не зайшов.'
  ),
  new FillTask(
    'to open',
    'Can you ___ the window?',
    ['open'],
    'Can you open the window? - Можеш відчинити вікно?'
  ),
  new FillTask(
    'to drive',
    'You shouldn\'t ____ a car when you\'re drunk',
    ['drive'],
    'You shouldn\'t drive a car when you\'re drunk - Тобі не варто водити машину коли ти п\'яний'
  )
])

export default lesson
