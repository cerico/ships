import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');

import {selectShip} from '../selectors/ship';

class Ship extends React.Component  {

  render (){
    return (<div>s</div>)
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    ship: selectShip(state.ships,ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(Ship);
