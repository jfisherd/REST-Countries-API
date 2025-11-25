import { contactApi } from "./services/apiService.js"

const header = document.getElementById('header')
const nav = document.getElementById('nav')
const main = document.getElementById('main')

const myCountries = await contactApi()

for (let i = 0; i < myCountries.length; i++) {

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
    newCardTitle.innerHTML = `${myCountries[i]?.name}` // United States of America
    newCardBody.append(newCardTitle) // append title to body

    let newCardText = document.createElement('p') // make a paragraph for the body
    newCardText.innerHTML = `Population: ${myCountries[i]?.population}
                             Region: ${myCountries[i]?.region}
                             Capital: ${myCountries[i]?.population}
                            `
                            // Population: 12,345
                            // Region: Americas
                            // Capital: Washington D.C.
    newCardBody.append(newCardText) // append the paragraph to the body



    // KEEP APPENDING
    main?.append(newCard) // append the body to the card
}
