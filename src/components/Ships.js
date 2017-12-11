import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './ships.css';

import ShipItem from './ShipItem';

class Ships extends React.Component  {

  processIntegerSequence(input) {
    console.log(input)
      var integerSequence = input.split(',')
        .filter(function(x) {
            return x.length > 0;
        })
        .map(Number);
    
      // your code goes here (write your result to the console)
    }
    

  render (){
    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'none'
      var input = [1,1,1,2,2,2,1,1,2,2,6,2,1,8]
      processIntegerSequence(input)
    
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
