
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
        type: "match",
        word: "yard",
        options: [
            "двір",
            "робота",
            "будинок",
            "мітла"
        ],
        correctAnswer: "двір"
    },
    {
        type: "match",
        word: "chair",
        options: [
            "стілець",
            "стіл",
            "робот",
            "вода"
        ],
        correctAnswer: "стілець"
    }
])

export default lesson