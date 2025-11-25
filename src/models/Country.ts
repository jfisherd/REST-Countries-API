interface Name {
  common: string
  official?: string
  nativeName?: string
}

interface Currency {
  code: string
  name: string
  symbol: string
}

interface Language {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

interface Flag { // an interface for the "flags" property, cannot access svg and png easily without
  svg: string
  png: string
}

export class Country {
  name: Name
  topLevelDomain: string[]
  capital: string
  subregion: string
  region: string
  population: number
  borders?: string[]
  currencies: Currency[]
  languages: Language[]
  flags: Flag

  constructor(
    name: Name,
    topLevelDomain: string[],
    capital: string,
    subregion: string,
    region: string,
    population: number,
    borders: string[],
    currencies: Currency[],
    languages: Language[],
    flags: Flag
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
    this.flags = flags
  }
}