

export const shuffleArray = (array) => {
    return Array.from(array).sort(() => Math.random() - 0.5)
}