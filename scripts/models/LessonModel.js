

class LessonModel {
 
    async getLesson (code){
        // const lesson = await fetch(`../../lessons/lesson-${code}.json`)
        const lesson = await import(`../../lessons/lesson-${code}.js`)
        // return await lesson.json()
        return lesson.default
    }

    getWordsFromLesson (lesson) {
        const words = []
        lesson.tasks.forEach(task => {
            words.push(task.word)
        })

        return words
    }
}

export default LessonModel