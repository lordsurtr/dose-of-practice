
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 1', [
    new MatchTask('to flunk', 'to flunk', ['завалити (екзамен)', 'потонути', 'знищити'], ['завалити (екзамен)']),
    new MatchTask('blanket', 'blanket', ['ковдра', 'матрас', 'ліжко'], ['ковдра']),
    new MatchTask('laptop', 'laptop', ['ноутбук', 'комп\'ютер', 'монітор'], ['ноутбук']),
    new WriteTask('yard', 'двір', ['yard', 'a yard', 'the yard']),
    new WriteTask('headphones', 'навушники', ['headphones', 'the headphones']),
])

export default lesson