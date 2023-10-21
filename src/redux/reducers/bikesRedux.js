import { API_URL } from '../../config';
import { createRoutesActionName } from '../actions/actionsUtility';

//selectors
export const getBikesData = (state) => state.bikes;

// actions
export const GET_BIKES = createRoutesActionName('GET_BIKES');

// action creators
export const getBikes = (payload) => ({ type: GET_BIKES, payload });

// fetch
export const fetchBikes = () => {
  return (dispatch) => {
    fetch(`${API_URL}/bikes`)
      .then((res) => res.json())
      .then((bikes) => dispatch(getBikes(bikes)));
  };
};

const bikesReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_BIKES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default bikesReducer;
