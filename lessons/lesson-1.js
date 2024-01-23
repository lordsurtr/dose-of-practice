
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 3', [
  new MatchTask(
    'match',
    'to flunk',
    'to flunk',
    ['завалити (екзамен)', 'потонути', 'знищити'],
    ['завалити (екзамен)']
  ),
  new MatchTask(
    'match',
    'wall',
    'wall',
    ['стіна', 'кімната', 'стіл'],
    ['стіна']
  ),
  new WriteTask(
    'write',
    'to flunk',
    'завалити (екзамен)',
    ['to flunk', 'flunk']
  ),
  new WriteTask(
    'write',
    'table',
    'стіл',
    ['table', 'the table', 'a table']
  ),
  new ListenTask(
    'listen',
    'to flunk',
    'How could he flunk me?',
    'Як він міг мене завалити?',
    ['how could he flunk me?', 'how could he flunk me.', 'how could he flunk me'],
    'Хииии лох)))',
  ),
  new ListenTask(
    'listen',
    'laptop',
    'I need a new laptop.',
    'Мені потрібен новий ноутбук',
    ['i need a new laptop', 'i need a new laptop!', 'i need a new laptop.']
  ),
])

export default lesson
