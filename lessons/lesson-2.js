
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask, FillTask, FillMatchTask} from "./Tasks.js"

const lesson = new Lesson('Lesson 3', [
  new FillMatchTask(
    'to lock',
    'Don\'t forget to ____ the door, so no one gets in.',
    ['lock', 'open', 'unlock'],
    ['lock'],
    'Don\'t forget to lock the door, so no one gets in. - Не забудь закрити двері, щоб ніхто не зайшов.'
  ),
])

export default lesson
