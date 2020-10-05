export function serializeCountriesPopulation(countries) {
  return countries.map(country => ({
    name: country.name,
    flag: country.flag,
    region: country.region,
    capital: country.capita,
    population: country.population
  }))
}
