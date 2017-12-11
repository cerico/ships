import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import { Link } from 'react-router-dom';
import MdHighlightOff from 'react-icons/lib/md/highlight-off';
import {selectShip} from '../selectors/ship';
import style from './ship.css'

class Ship extends React.Component  {

  render (){
    return (
    <div className={style.ship}>
      <Link to="/">
        <MdHighlightOff size={40} />
      </Link>
    </div>)
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    ship: selectShip(state.ships,ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(Ship);
