import { API_URL } from '../../config';
import { createRoutesActionName } from '../actions/actionsUtility';

//selectors
export const getRoutesData = (state) => state.routes;
export const getRouteById = ({ routes }, route_id) => routes.find((route) => route.route_id === route_id);
export const getRoutesIDs = (state) => {
  return state.routes.map((route) => route.route_id);
};

// actions
export const GET_ROUTES = createRoutesActionName('GET_ROUTES');

// action creators
export const getRoutes = (payload) => ({ type: GET_ROUTES, payload });

// fetch
export const fetchRoutes = () => {
  return (dispatch) => {
    fetch(`${API_URL}/routes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((routes) => dispatch(getRoutes(routes)))
      .catch((error) => {
        console.error('Wystąpił błąd:', error);
      });
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
