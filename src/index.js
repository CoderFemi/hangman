import Hangman from './hangman'
import getPuzzle, { getLocation, getCountry } from './requests'

let game

const puzzleElement = document.querySelector('#puzzle')
const guessElement = document.querySelector('#guesses')

const render = () => {
    puzzleElement.innerHTML = ''
    guessElement.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle(2).then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
})

getCountry('US').then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})

getLocation().then((location) => {
    console.log(`Hello, you live in ${location.city}, in ${location.region} region in ${location.country}.`)
}).catch((error) => {
    console.log(error)
})