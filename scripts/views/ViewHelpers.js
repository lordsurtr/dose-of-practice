

export const createElement = (tag, classes = [], content = '') => {
    const elem = document.createElement(tag)
    classes.forEach(c => {
        elem.classList.add(c)
    })
    elem.textContent = content
    
    return elem
}

export const clearApp = () => {
    const app = document.querySelector('.app')
    while(app.firstChild) {
        app.removeChild(app.lastChild)
    }
}

export const clearContainer = (container) => {
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
}