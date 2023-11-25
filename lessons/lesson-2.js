

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
    },
    {
        type: "match",
        word: "annihilation",
        options: [
            "анігіляція",
            "потонути",
            "знищити",
            "відшити"
        ],
        correctAnswer: "анігіляція"
    },
    {
        type: "write",
        word: "екран",
        correctAnswer: "screen"
    },
    {
        type: "write",
        word: "курка",
        correctAnswer: "chicken"
    },
    {
        type: "write",
        word: "мишка",
        correctAnswer: "mouse"
    },
    {
        type: "write",
        word: "жирний",
        correctAnswer: "fat"
    },
])

export default lesson