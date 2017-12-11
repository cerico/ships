import _ from 'lodash';
import { createSelector } from 'reselect';

export const selectShip = (ships,id) => {
  const ship = ships.filter(ship => ship.id === parseInt(id))[0]
  return ship;
};
