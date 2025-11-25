console.log('script is running')

import { contactApi } from "./services/apiService.js" // OPEN MAIN HTML PAGE IN LIVE SERVER
console.log('import complete')

const header = document.getElementById('header')
const nav = document.getElementById('nav')
const main = document.getElementById('main')
console.log('DOM elements header, nav, main are now in js script. Contacting api...')

const myCountries = await contactApi() // request the api one time to access all country data
console.log('PAST LINE: const myCountries = await contactApi()')

for (let i = 0; i < myCountries.length; i++) {

    if (i<5) {
        console.log(`i = ${i}`) // loop counter, dev use only
    }

    let newCard = document.createElement('div') // make a new card
    newCard.setAttribute('class', 'card')
    newCard.setAttribute('id', `card-${i}`)

    let newImage = document.createElement('img') // make an img element
    newImage.src = `${myCountries[i]?.flags.png}` // make the img source a flag
    newCard.append(newImage) // append img to card

    let newCardBody = document.createElement('div') // make a body for the card
    newCardBody.setAttribute('class', 'card-body')
    newCardBody.setAttribute('id',`card-body-${i}`)
    newCard.append(newCardBody) // append body to card

    let newCardTitle = document.createElement('h5') // make a title for the body
    // console.log(myCountries[i]?.name?.common ?? 'Country Name Missing')
    newCardTitle.textContent = `${myCountries[i]?.name.common}` // United States of America
    newCardBody.append(newCardTitle) // append title to body

    let newCardText = document.createElement('p') // make a paragraph for the body
    newCardText.innerHTML = `Population: ${myCountries[i]?.population}
                             Region: ${myCountries[i]?.region}
                             Capital: ${myCountries[i]?.capital}
                            `
                            // Population: 12,345
                            // Region: Americas
                            // Capital: Washington D.C.
    newCardBody.append(newCardText) // append the paragraph to the body

    main?.append(newCard) // append the body to the card
}

console.log('This is the console log in the script below the for loop')
