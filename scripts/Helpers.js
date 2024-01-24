

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
