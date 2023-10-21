import { API_URL } from '../../config';
import { createRoutesActionName } from '../actions/actionsUtility';

//selectors
export const getRoutesData = (state) => state.routes;

// actions
export const GET_ROUTES = createRoutesActionName('GET_ROUTES');

// action creators
export const getRoutes = (payload) => ({ type: GET_ROUTES, payload });

// fetch
export const fetchRoutes = () => {
  return (dispatch) => {
    fetch(`${API_URL}/routes`)
      .then((res) => res.json())
      .then((routes) => dispatch(getRoutes(routes)));
  };
};

const routesReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_ROUTES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default routesReducer;
