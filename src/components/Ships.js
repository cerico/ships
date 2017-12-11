import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './ships.css';

import ShipItem from './ShipItem';

class Ships extends React.Component  {

  render (){
    return(
      <div className={styles.grid}>
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
