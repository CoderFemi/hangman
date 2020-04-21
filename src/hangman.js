class Hangman {
    constructor(word, guessesLeft) {
        this.word = word.toLowerCase().split('')
        this.guesses = []
        this.guessesLeft = guessesLeft
        this.status = 'playing'
    }

    calculateStatus() {
        const finished = this.word.every((letter) => {
            this.guesses.includes(letter) || letter === ' '
        })

        if (this.guessesLeft === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guessesLeft}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was ${this.word.join('')}`
        } else {
            return 'Great work! You guessed the word.'
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guesses.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guesses.includes(guess)
        const isWrong = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }
        if (isUnique) {
            this.guesses.push(guess)
        }

        if (isUnique && isWrong) {
            this.guessesLeft--
        }
        this.calculateStatus()
    }
}

export { Hangman as default}