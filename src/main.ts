alert('Script start')

console.log('script is running')

import { contactApi } from "./services/apiService.js" // OPEN MAIN HTML PAGE IN LIVE SERVER
console.log('import complete')

const header = document.getElementById('header')
const darkMode = document.getElementById('dark-mode')
const nav = document.getElementById('nav')
const input: HTMLElement = document.getElementById('input') ?? document.createElement('input')
const select: HTMLElement = document.getElementById('select') ?? document.createElement('select')
const main: HTMLElement = document.getElementById('main') ?? document.createElement('main')
console.log('DOM elements header, nav, main are now in js script. Contacting api...')

const myCountries = await contactApi() // request the api one time to access all country data
console.log('PAST LINE: const myCountries = await contactApi()')

let myCards: object[] = []
let myTempCards: object[] = []

// const testButton = document.createElement('button') // The testing button... keep for testing
// testButton.innerText = 'The Testing Button'
// nav?.append(testButton)

for (let i = 0; i < myCountries.length; i++) {

    if (i < 5) {
        console.log(`i = ${i}`) // loop counter, dev use only
    }

    let newCard = document.createElement('div') // make a new card
    newCard.setAttribute('class', 'card')
    newCard.setAttribute('id', `card-${i}`)
    newCard.addEventListener('click', () => {
        // GO TO country page
        alert('CARD CLICKED')
        window.open('../detail.html')
    })

    let newImage = document.createElement('img') // make an img element
    newImage.src = `${myCountries[i]?.flags.png}` // make the img source a flag
    newCard.append(newImage) // append img to card

    let newCardBody = document.createElement('span') // make a body for the card
    newCardBody.setAttribute('class', 'card-body')
    newCardBody.setAttribute('id', `card-body-${i}`)
    newCard.append(newCardBody) // append body to card

    let newCardTitle = document.createElement('div') // make a title for the body
    newCardTitle.setAttribute('class', 'card-title')
    newCardTitle.textContent = `${myCountries[i]?.name.common}`
    newCardBody.append(newCardTitle) // append title to body

    let newCardPopulation = document.createElement('p') // make a paragraph for population
    newCardPopulation.innerText = `Population: ${myCountries[i]?.population}`

    let newCardRegion = document.createElement('p') // make a paragraph for region
    newCardRegion.innerText = `Region: ${myCountries[i]?.region}`

    let newCardCapital = document.createElement('p') // make a paragraph for capital
    newCardCapital.innerText = `Capital: ${myCountries[i]?.capital}`

    newCardBody.appendChild(newCardPopulation)
    newCardBody.appendChild(newCardRegion)
    newCardBody.appendChild(newCardCapital)

    main?.append(newCard) // append the body to the card
}

console.log('This is the console log in the script below the for loop')

darkMode?.addEventListener('click', () => {
    console.log('Dark Mode toggle clicked')
    alert('Dark Mode has been clicked')
    // toggle light/dark mode
})

select?.addEventListener('change', (event) => {
    console.log('this log comfirms a change has been selected')
    alert('a change has been selected') // ALERT NOT ALERTING

    // re draw main with cards filtered by region
})

input?.addEventListener('change', () => {
    // clear main
    // re draw main with cards filtered by search input, dynamic
})

input.addEventListener('click', () => { // CONSIDER DELETING FOR BETTER USER EXPERIENCE
    // clear the input field
    // clear main
    // re draw main with cards filtered by search input
})

alert('Script end')