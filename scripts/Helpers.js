

export const shuffleArray = (array) => {
    return Array.from(array).sort(() => Math.random() - 0.5)
}

export const shuffleArrayByDifficulty = (array) => {
  let matchTasks = array.filter(task => task.type == 'match')
  matchTasks = shuffleArray(matchTasks)

  let writeTasks = array.filter(task => task.type == 'write')
  writeTasks = shuffleArray(writeTasks)

  let listenTasks = array.filter(task => task.type == 'listen')
  listenTasks = shuffleArray(listenTasks)

  return matchTasks.concat(writeTasks.concat(listenTasks));
}
