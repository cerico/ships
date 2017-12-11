import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');

import Ship from '../components/Ship';
import Ships from '../components/Ships';

class App extends React.Component  {
  
  render(){

  return (
    <Router>
       <div> 
  
          <Route component={Ships}/>
          <div>
            <Switch>
              <Route exact path="/" />
              <Route path="/ships/:id" component={Ship} />
            </Switch>
          </div>

        </div>
    </Router>
  );
}
}

const mapStateToProps = (state) => {
  return ({
      ships: state.ships
    })
}

export default connect(mapStateToProps, null)(App);

