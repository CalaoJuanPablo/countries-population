import React from 'react'
import styles from './styles.module.scss'

export function CountryCard({ name, flag, region, capital, population }) {
  return (
    <div className={styles.CountryCard}>
      <figure className={styles.CountryCard__flag}>
        <img src={flag} alt={`${name} ${flag}`} />
      </figure>
      <div className={styles.CountryCard__info}>
        <h1 className={styles['CountryCard__info--name']}>{name}</h1>
        <h3 className={styles['CountryCard__info--capital']}>
          Capital:&nbsp;{capital}
        </h3>
        <p className={styles['CountryCard__info--region']}>Region: {region}</p>
        <p className={styles['CountryCard__info--population']}>
          Population: {population.toLocaleString('en')}
        </p>
      </div>
    </div>
  )
}
