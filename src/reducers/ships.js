const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SHIPS_SUCCESS':
      return action.ships;
    default:
      return state;
  }
}