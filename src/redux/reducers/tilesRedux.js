import { API_URL } from '../../config';
import { createTilesActionName } from '../actions/actionsUtility';

//selectors
export const getAllTiles = (state) => state.tiles;

//actions
export const GET_DATA = createTilesActionName('GET_DATA');

//action creators
export const getTiles = (payload) => ({ type: GET_DATA, payload });

//fetch
export const fetchData = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tiles`)
      .then((res) => res.json())
      .then((tiles) => dispatch(getTiles(tiles)));
  };
};

const tilesReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tilesReducer;
