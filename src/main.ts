console.log('script is running')

import { contactApi } from "./services/apiService.js" // OPEN MAIN HTML PAGE IN LIVE SERVER
console.log('import complete')

const header = document.getElementById('header')
const nav = document.getElementById('nav')
const main = document.getElementById('main')
console.log('DOM elements header, nav, main are now in js script. Contacting api...')

const myCountries = await contactApi() // request the api one time to access all country data
console.log('PAST LINE: const myCountries = await contactApi()')

let myCards: object[] = []

//

for (let i = 0; i < myCountries.length; i++) {

    if (i<5) {
        console.log(`i = ${i}`) // loop counter, dev use only
    }

    let newCard = document.createElement('div') // make a new card
    newCard.setAttribute('class', 'card')
    newCard.setAttribute('id', `card-${i}`)
    newCard.addEventListener('click', () => {
        // GO TO country page
    })

    let newImage = document.createElement('img') // make an img element
    newImage.src = `${myCountries[i]?.flags.png}` // make the img source a flag
    newCard.append(newImage) // append img to card

    let newCardBody = document.createElement('span') // make a body for the card
    newCardBody.setAttribute('class', 'card-body')
    newCardBody.setAttribute('id',`card-body-${i}`)
    newCard.append(newCardBody) // append body to card

    let newCardTitle = document.createElement('div') // make a title for the body
    newCardTitle.setAttribute('class','card-title')
    newCardTitle.textContent = `${myCountries[i]?.name.common}`
    newCardBody.append(newCardTitle) // append title to body

    let newCardPopulation = document.createElement('p') // make a paragraph for population
    newCardPopulation.innerText = `Population: ${myCountries[i]?.population}`             

    let newCardRegion = document.createElement('p') // make a paragraph for region
    newCardRegion.innerText = `Region: ${myCountries[i]?.region}`             

    let newCardCapital = document.createElement('p') // make a paragraph for capital
    newCardCapital.innerText = `Capital: ${myCountries[i]?.capital}`             

    newCardBody.append(newCardPopulation, newCardRegion, newCardCapital) // append the paragraph to the body

    main?.append(newCard) // append the body to the card
}

console.log('This is the console log in the script below the for loop')
