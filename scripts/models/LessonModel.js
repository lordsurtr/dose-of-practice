

class LessonModel {
 
    async getLesson (code){
        const lesson = await import(`../../lessons/lesson-${code}.js`)
        return lesson.default
    }

    getWordsFromLesson (lesson) {
        let words = []
        lesson.tasks.forEach(task => {
            if(words.includes(task.word)) {
                return
            }
            words.push(task.word)
        })

        return words
    }
}

export default LessonModel