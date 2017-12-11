import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ships.css';
import { getCountry } from '../utils'

class ShipItem extends React.Component  {

  render() {

    const ship = this.props.ship
    ship.country = getCountry(ship.owner)
    ship.url = `/ships/${ship.id}`
      
    return (
      <article className={styles.ship}>
          <Link to={ship.url}>
          <figure className={styles.figure}>
            <img className={styles.image} src="http://isinvisible.com/thumbs/products/2017/mu-so-qb/hju42_av1-700x700.jpg" srcSet="http://isinvisible.com/thumbs/products/2017/mu-so-qb/hju42_av1-700x700.jpg 1x , http://isinvisible.com/thumbs/products/2017/mu-so-qb/hju42_av1-1400x1400.jpg 2x" alt="Mu-so Qb by Naim"/>
          </figure>
        </Link>
        <div className={styles.info}>
          <h1 className={styles.title}>{ship.name}</h1>
          <h2 className={styles.subtitle}>
            <a className={styles.subtitleLink} href="https://www.naimaudio.com">
              {ship.maxTEU} - {ship.country}
            </a>
          </h2>
        </div>
      </article>
    )
  }
}

export default ShipItem