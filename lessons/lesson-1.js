
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 1', [
    new MatchTask('match', 'to flunk', 'to flunk', ['завалити (екзамен)', 'потонути', 'знищити'], ['завалити (екзамен)']),
    new MatchTask('match', 'blanket', 'blanket', ['ковдра', 'матрас', 'ліжко'], ['ковдра']),
    new MatchTask('match', 'laptop', 'laptop', ['ноутбук', 'комп\'ютер', 'монітор'], ['ноутбук']),
    new WriteTask('write', 'yard', 'двір', ['yard', 'a yard', 'the yard']),
    new WriteTask('write', 'headphones', 'навушники', ['headphones', 'the headphones']),
    new WriteTask('write', 'to flunk', 'завалити (екзамен)', ['to flunk', 'flunk']),
])

export default lesson