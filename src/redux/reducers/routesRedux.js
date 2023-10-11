import { API_URL } from '../../config';
import { createRoutesActionName } from '../actions/actionsUtility';

//selectors
export const getRoutesData = (state) => state.routes;

// actions
export const GET_DATA = createRoutesActionName('GET_DATA');

// action creators
export const getRoutes = (payload) => ({ type: GET_DATA, payload });

// fetch
export const fetchData = () => {
  return (dispatch) => {
    fetch(`${API_URL}/routes`)
      .then((res) => res.json())
      .then((routes) => dispatch(getRoutes(routes)));
  };
};

const routesReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default routesReducer;
