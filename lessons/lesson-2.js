

import Lesson from "./Lesson.js";

const lesson = new Lesson('Урок 1', [
    {
        type: "match",
        word: "to flunk",
        options: [
            "завалити (екзамен)",
            "потонути",
            "знищити",
            "відшити"
        ],
        correctAnswer: "завалити (екзамен)"
    },
    {
        type: "write",
        word: "двір",
        correctAnswer: "yard"
    },
    {
        type: "write",
        word: "крісло",
        correctAnswer: "chair"
    }
])

export default lesson