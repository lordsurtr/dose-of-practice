

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
  return newText
}


export const calculateSpellingDistance = (str1, str2) => {
  let distances = []

  for (var i = 0; i <= str1.length; ++i) { 
    distances[i]    = [ i ] 
  }

  for (var i = 0; i <= str2.length; ++i) { 
    distances[0][i] =   i
  }

  for (var j = 1; j <= str2.length; ++j) {
    for (var i = 1; i <= str1.length; ++i) {

      if(str1[i-1] == str2[j - 1]) {
        distances[i][j] = distances[i-1][j-1]
      } else {
        distances[i][j] = Math.min.apply(Math, [
          distances[i-1][j] + 1,
          distances[i][j-1] + 1,
          distances[i-1][j-1]+1
        ])
      }
    }
  }

  return distances[str1.length][str2.length]
}

export const removeDoubleSpaces = (text) => {
  let output = ''
  for(let i = 0; i < text.length; i++) {
    if(!(text[i] == ' ' && text[i + 1] == ' ')) {
      output += text[i]
    }
  }
  console.log(text)
  console.log(output)
  return output
}
