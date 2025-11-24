export class Country {
    name: string;
    topLevelDomain: string[];
    capital: string;
    subregion: string;
    region: string;
    population: number;
    borders: string[];
    currencies: object[];
    languages: object[];

    constructor(
        name: string,
        topLevelDomain: string[],
        capital: string,
        subregion: string,
        region: string,
        population: number,
        borders: string[],
        currencies: object[],
        languages: object[]
    ) {
        this.name = name
        this.topLevelDomain = topLevelDomain
        this.capital = capital
        this.subregion = subregion
        this.region = region
        this.population = population
        this.borders = borders
        this.currencies = currencies
        this.languages = languages
    }
}