const API_URL = `https://s3.eu-west-2.amazonaws.com/io1937/musicali/ships.json`

export const getShips = () => {
  const endpoint = `${API_URL}`
  return dispatch => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(res => dispatch(setShips(res.ships)))
    .catch(error => console.log(error))
  }
}

export const setShips = ships => {
  return {
    type: 'GET_SHIPS_SUCCESS',
    ships,
  }
}