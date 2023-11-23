

class LessonModel {
 
    async getLesson (code){
        const lesson = await fetch(`../../lessons/lesson-${code}.json`)
        return await lesson.json()
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