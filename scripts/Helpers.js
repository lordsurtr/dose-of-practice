

export const shuffleArray = (array) => {
    return Array.from(array).sort(() => Math.random() - 0.5)
}

export const shuffleTasksByDifficulty = (array) => {

  const sortOrder = ['match', 'write', 'listen', 'fill-match', 'fill']
  let shuffledTasks = []
  sortOrder.forEach(order => {
    let currentArray = shuffleArray(array.filter(task => task.type == order))
    shuffledTasks = shuffledTasks.concat(currentArray);
  })

  return shuffledTasks
}

export const filterTasks = (tasks, filteredType) => {
  return tasks.filter(task => task.type != filteredType)
}

export const getPercentage = (part, total) => {
  return (part * 100) / total
}

export const removePunctuation = (text) => {
  const specialChars = '.,!?:#$%&^*()[]{}-=+></\\\'\"'.split('')
  let newText = ''
  for(let i = 0; i < text.length; i++) {
    if(!specialChars.includes(text[i])) {
      newText += text[i]
    }
  }
  console.log(text)
  console.log(newText)
  return newText
}
