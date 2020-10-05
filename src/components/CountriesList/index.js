import React from 'react'
import { CountryCard } from '../CountryCard'
import { getAllCountries } from '../../services'
import styles from './styles.module.scss'

export function CountriesList() {
  const [countries, setCountries] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

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

  return (
    <div className={styles.CountriesList}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        countries.map((country, idx) => (
          <CountryCard key={`country-${idx.toString()}`} {...country} />
        ))
      )}
    </div>
  )
}
