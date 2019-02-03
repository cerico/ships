import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './ships.css';

import ShipItem from './ShipItem';

class Ships extends React.Component  {

  render (){
    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'none'
    
    const style = {
      general: {
        display: display
      }
    }
    return(
      <div className={styles.grid} style={style.general}>
        {this.props.ships.length > 0 ? 
          this.props.ships.map((ship, index) =>
            <ShipItem ship={ship} key={index}/>) 
          : null
        }
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return ({
      ships: state.ships,
    })
}

export default connect(mapStateToProps, null )(Ships);
