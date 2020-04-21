const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
        if (response.status === 200) {
            const data = await response.json()
            return data.puzzle
        } else {
            throw new Error('Unable to fetch data!')
        }
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    
        if (response.status === 200) {
            const data = await response.json()
            const country = data.find((country) => country.alpha2Code === countryCode)
            return country
        } else {
            throw new Error('Unable to process request')
        }
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=6061adb6834899').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Couldn\'t fetch data')
        }
    })
}

export {getCountry, getLocation, getPuzzle as default }