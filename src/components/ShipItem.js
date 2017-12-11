import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ships.css';
import { getCountry, getImage } from '../utils'

class ShipItem extends React.Component  {

  render() {

    const ship = this.props.ship
    ship.country = getCountry(ship.owner)
    ship.url = `/ships/${ship.id}`
    !ship.image ? ship.image =  getImage(ship.id) : ship.image
      
    return (
      <article className={styles.ship}>
          <Link to={ship.url}>
            <img className={styles.image} src={ship.image}/>       
            <div className={styles.info}>
              <h1 className={styles.title}>{ship.name}</h1>
              <h2 className={styles.subtitle}>Tonnage: {ship.maxTEU}</h2>
              <h2 className={styles.subtitle}>Registered: {ship.country}</h2>
            </div>
          </Link>
      </article>
    )
  }
}

export default ShipItem