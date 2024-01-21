
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 2', [
    new ListenTask('listen', 'to flunk', 'How could he flunk me?', ['how could he flunk me?', 'how could he flunk me.', 'how could he flunk me']),
  new ListenTask('listen', 'laptop', 'I need a new laptop.', ['i need a new laptop', 'i need a new laptop!', 'i need a new laptop.']),

])

export default lesson
