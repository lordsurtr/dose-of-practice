
import Lesson from "./Lesson.js";
import { FillMatchTask, FillWriteTask, IsCorrectTask, SentenceAssemble, TranslateMatchTask, TranslateWriteTask } from "./Tasks.js";

const lesson = new Lesson('The Prestige', [
  // EASY TASKS 
  new TranslateMatchTask(
    'to consist of',
    'consist of',
    ['складатися з', 'з\'єднувати', 'містити'],
    ['складатися з']
  ),
  new TranslateMatchTask(
    'endeavor',
    'endeavor',
    ['намагання', 'ціль', 'виклик'],
    ['намагання']
  ),
  new TranslateMatchTask(
    'significance',
    'значимість',
    ['significance', 'significant', 'important'],
    ['significance']
  ),
  new TranslateMatchTask(
    'to interfere with',
    'заважати',
    ['to interfere with', 'to interfere to', 'to interfere on'],
    ['to interfere with']
  ),

  new FillMatchTask(
    'to consist of',
    'The book ___ __ four chapters.',
    ['consists of', 'consists', 'consists with'],
    ['consists of'],
  ),
  // new FillMatchTask(
  //   'endeavor',
  //   ''
  // ),
  new FillMatchTask(
    'significance',
    'This event is of big _____ me.',
    ['significance to', 'important to', 'significance'],
    ['significance to'],
    'Ця подія для мене дуже важлива'
  ),
  new FillMatchTask(
    'to interfere with',
    'Do not _____ __ my creative process',
    ['interfere with', 'interfere', 'annoy'],
    ['interfere with'],
    'Не заважай моєму творчому процесу'
  ),

  // MEDIUM MODE TASKS
  new IsCorrectTask(
    'to consist of',
    'The event consists with three parts',
    ['неправильно'],
  ),
  new IsCorrectTask(
    'endeavor',
    'Language learning is a hard endeavor.',
    ['правильно']
  ),
  new IsCorrectTask(
    'significance',
    'You can\'t miss an event of such significant!',
    ['неправильно']
  ),
  new IsCorrectTask(
    'to interfere with',
    'Please, do not interfere.',
    ['правильно'],
  ),

  new TranslateWriteTask(
    'to consist of',
    'складатися з',
    ['to consist of', 'consist of', 'consists of'],
  ),
  new TranslateWriteTask(
    'endeavor',
    'намагання',
    ['endeavor', 'edeavour', 'the endeavor', 'the endeavour', 'an endeavor', 'an endeavour'],
    'e*****r'
  ),
  new TranslateWriteTask(
    'significance',
    'значимість',
    ['significance', 'the significance'],
    's***********'
  ),
  new TranslateWriteTask(
    'to interfere with',
    'заважати',
    ['to interfere with', 'to interfere', 'interfere with', 'interfere'],
  ),

  // HARD MODE TASKS 
  new SentenceAssemble(
    'to consist of',
    'Наш план складатиметься з трьох стадій.',
    'Our plan will consist of three stages. consists with',
    ['our plan will consist of three stages'],
  ),
  new SentenceAssemble(
    'endeavor',
    'Новини показали наші останні успішні воєнні намагання.',
    'The news showed our latest successful military endeavors. late a',
    ['the news showed our latest successful military endeavors']
  ),
  new SentenceAssemble(
    'significance',
    'Важко недооцінювати значення цього артефакту.',
    'It\'s hard to underestimate the significance of this artifact.',
    ['it\'s hard to underestimate the significance of this artifact']
  ),
  new SentenceAssemble(
    'to interfere with',
    'Це їхня проблема, і я не збираюся заважати.',
    'It\'s their problem and I\'m not going to interfere.',
    ['it\'s their problem and i\'m not going to interfere']
  ),

  new FillWriteTask(
    'to consist of',
    'A computer ____ __ many parts.',
    ['consists of'],
    'Комп\'ютер складається з багатьох частин.'
  ),
  // new FillWriteTask(
  //   'significance',
  //   ''
  // )
])

export default lesson
