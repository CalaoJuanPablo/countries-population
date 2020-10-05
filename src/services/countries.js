import { serializeCountriesPopulation } from '../utils'

const API_BASE_URL = 'https://restcountries.eu/rest/v2/all'

export async function getAllCountries() {
  try {
    const response = await fetch(API_BASE_URL)
    const countries = await response.json()
    const countriesSerialized = serializeCountriesPopulation(countries)
    return countriesSerialized
  } catch (err) {
    console.error(err)
  }
}
