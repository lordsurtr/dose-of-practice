
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 3', [
    new MatchTask('match', 'to flunk', 'to flunk', ['завалити (екзамен)', 'потонути', 'знищити'], ['завалити (екзамен)']),
    new MatchTask('match', 'blanket', 'blanket', ['ковдра', 'матрас', 'ліжко'], ['ковдра']),
    new MatchTask('match', 'laptop', 'laptop', ['ноутбук', 'комп\'ютер', 'монітор'], ['ноутбук']),
    new WriteTask('write', 'yard', 'двір', ['yard', 'a yard', 'the yard']),
    new WriteTask('write', 'headphones', 'навушники', ['headphones', 'the headphones']),
    new WriteTask('write', 'to flunk', 'завалити (екзамен)', ['to flunk', 'flunk']),
    new ListenTask('listen', 'to flunk', 'How could he flunk me?', ['how could he flunk me?', 'how could he flunk me.', 'how could he flunk me']),
  new ListenTask('listen', 'laptop', 'I need a new laptop.', ['i need a new laptop', 'i need a new laptop!', 'i need a new laptop.']),

])

export default lesson
