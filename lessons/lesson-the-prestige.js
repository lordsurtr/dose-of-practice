
import Lesson from "./Lesson.js";
import {MatchTask, WriteTask, ListenTask, FillTask, FillMatchTask} from "./Tasks.js"

const lesson = new Lesson('The Prestige', [
  new MatchTask(
    'to consist of',
    'consist of',
    ['складатися з', 'містити', 'залежати від'],
    ['складатися з'],
  ),
  new MatchTask(
    'endeavor',
    'endeavor',
    ['намагання', 'ціль', 'виклик'],
    ['намагання']
  ),
  new WriteTask(
    'significance',
    'значимість',
    ['significance', 'the significance', 'a significance'],
  ),
  new WriteTask(
    'to seem',
    'здаватися',
    ['to seem', 'seem']
  ),
  new WriteTask(
    'next to',
    'поряд зі мною',
    ['next to me', 'by my side'],
    'поряд зі мною - next to me / by my side'
  ),
  new ListenTask(
    'to interfere with',
    'Do not interfere with my creative process',
    'Не заважай моєму творчому процесу',
    ['do not interfere with my creative process.', 'do not interfere with my creative process']
  ),
  new ListenTask(
    'endeavor',
    'We have to help him in his endeavor',
    'Ми маємо допомогти йому в його зусиллях',
    ['we have to help him in his endeavor', 'we have to help him in his endeavor.']
  ),
  new FillMatchTask(
    'significance',
    'This research is of big _____.',
    ['significance', 'significant', 'important'],
    ['significance'],
    'This research is of big significance - Це дослідження має велике значення.'
  ),
  new FillTask(
    'to consits of',
    'The book ____ of 10 chapters',
    ['consists'],
    'The book consists of 10 chapters. - Книга складаєтсья з 10 розділів.'
  ),
  new FillMatchTask(
    'to interfere with',
    'I will not ____ with your plans.',
    ['interfere', 'stop', 'annoy'],
    ['interfere'],
    'I will not interfere with your plans. - Я не буду перешкоджати твоїм планам.'
  )
])

export default lesson
