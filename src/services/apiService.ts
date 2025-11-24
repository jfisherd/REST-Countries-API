import { Country } from "../models/Country.js";

export const contactApi = async (): Promise<Country[]> => {
    let countryArray: Country[] = []
    try {
        let response = await fetch('https://restcountries.com/v3.1/all?fields=name,topLevelDomain,capital,subregion,region,population,borders,currencies,languages,flags')

        if (!response.ok) { // check that response is ok
            throw new Error('Failed to receive proper response from the API')
        }

        let objectArray = await response.json()

        for (let i = 0; i < objectArray.length; i++) {
            countryArray[i] = new Country( // construct a new array of Product objects
                objectArray[i].name,
                objectArray[i].topLevelDomain,
                objectArray[i].capital,
                objectArray[i].subregion,
                objectArray[i].region,
                objectArray[i].population,
                objectArray[i].borders,
                objectArray[i].currencies,
                objectArray[i].languages,
                objectArray[i].flags
            )
        }
    }
    catch (error) {
        console.error('An error has occurred while fetching country data: ', error)
    }
    finally {
        return countryArray
    }
}