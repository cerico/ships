import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import { Link } from 'react-router-dom';
import MdHighlightOff from 'react-icons/lib/md/highlight-off';
import {selectShip} from '../selectors/ship';
import style from './ship.css'

const Ship = (props) => {

    return (
      props.ship ? 
        <div>
          <div className={classNames(style.ship, style.imageContainer)}>
            <img className={style.image} src={props.ship.image}/>
          </div>
          <div className={classNames(style.ship, style.detail)}>
            <Link style={{'float':'right'}} to="/">
              <MdHighlightOff size={40} />
            </Link>
            <div className="change"> 
              <h1 className={style.shipName}>{props.ship.name} 
                <span className={style.country}> ({props.ship.country})</span> 
              </h1> 
              <div className={style.description}></div> 
              <ul>
                <li className={style.subtitle}>Beam Meters: {props.ship.beamMeters}</li>
                <li className={style.subtitle}>Built: {props.ship.built}</li>
                <li className={style.subtitle}>Registered: {props.ship.country}</li>
                <li className={style.subtitle}>Gross Tonnage: {props.ship.grossTonnage}</li>
                <li className={style.subtitle}>Length in Meters: {props.ship.lengthMeters}</li>
                <li className={style.subtitle}>Max TEU: {props.ship.maxTeu}</li>
                <li className={style.subtitle}>Name: {props.ship.name}</li>
                <li className={style.subtitle}>Owner: {props.ship.owner}</li>
              </ul>
            </div>
          </div> 
        </div>
      : null
    )
  }

  const mapStateToProps = (state,ownProps) => {

  return {
    ship: selectShip(state.ships,ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(Ship);

