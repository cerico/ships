import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ships.css';
import { getCountry, getImage } from '../utils'

class ShipItem extends React.Component  {

  render() {

    const ship = this.props.ship
    ship.country = getCountry(ship.owner)
    ship.url = `/ships/${ship.id}`
    ship.image = getImage(ship.id)
      
    return (
      <article className={styles.ship}>
          <Link to={ship.url}>
          <figure className={styles.figure}>
            <img className={styles.image} src={ship.image}/>
          </figure>
        </Link>
        <div className={styles.info}>
          <h1 className={styles.title}>{ship.name}</h1>
          <h2 className={styles.subtitle}>
            <Link className={styles.subtitleLink} to={ship.url}>
              {ship.maxTEU} - {ship.country}
            </Link>
          </h2>
        </div>
      </article>
    )
  }
}

export default ShipItem