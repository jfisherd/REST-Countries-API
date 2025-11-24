import { contactApi } from "./services/apiService.js"

const header = document.getElementById('header')
const nav = document.getElementById('nav')
const main = document.getElementById('main')

const myCountries = await contactApi()

for (let i = 0; i < myCountries.length; i++) {
    let myNewCard = document.createElement('div')
    myNewCard.setAttribute('class', 'card')
    myNewCard.setAttribute('id', `card-${i}`)
    let myNewCardBody = document.createElement('div')
    main?.append(myNewCard)
}
