import React from 'react'
import { CountryCard } from '../CountryCard'
import { getAllCountries } from '../../services'
import styles from './styles.module.scss'

export function CountriesList() {
  const [countries, setCountries] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const filterCountries = (countries, filterCriteria) =>
    countries.filter(country =>
      country.name.toLowerCase().includes(filterCriteria.toLowerCase())
    )

  React.useEffect(function () {
    function getCountries() {
      setIsLoading(true)
      setIsError(false)
      getAllCountries()
        .then(countriesFromApi => {
          setCountries(countriesFromApi)
          setIsLoading(false)
        })
        .catch(() => {
          setIsError(true)
          setCountries([])
          setIsLoading(false)
        })
    }

    getCountries()
  }, [])

  const countriesToRender = React.useMemo(
    () => filterCountries(countries, search),
    [countries, search]
  )

  return (
    <>
      <form
        className={styles.searchBarForm}
        onSubmit={ev => ev.preventDefault()}
      >
        <h1>Search for a country</h1>
        <input
          name='search-bar'
          value={search}
          onChange={ev => setSearch(ev.target.value)}
        />
      </form>
      <div className={styles.CountriesList}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>Error</h1>
        ) : (
          countriesToRender.map((country, idx) => (
            <CountryCard key={`country-${idx.toString()}`} {...country} />
          ))
        )}
      </div>
    </>
  )
}
