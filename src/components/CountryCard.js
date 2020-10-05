import React from 'react'

export function CountryCard({ name, flag, region, capital, population }) {
  return (
    <div>
      <figure>
        <img src={flag} alt={`${name} ${flag}`} />
      </figure>
      <h1>{name}</h1>
      <h3>Capital: {capital}</h3>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
    </div>
  )
}
