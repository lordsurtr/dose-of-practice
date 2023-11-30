

class LessonModel {
 
    async getLesson (code){
        // const lesson = await fetch(`../../lessons/lesson-${code}.json`)
        const lesson = await import(`../../lessons/lesson-${code}.js`)
        // return await lesson.json()
        return lesson.default
    }

    getWordsFromLesson (lesson) {
        let words = []
        lesson.tasks.forEach(task => {
            if(words.filter(item => item.words === task.word).length > 0) {
                return
            }
            words.push({
                word: task.word,
                selected: true,
            })
        })

        return words
    }
}

export default LessonModel