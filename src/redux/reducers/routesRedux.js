import { API_URL } from '../../config';
import { createRoutesActionName } from '../actions/actionsUtility';

//selectors
export const getRoutesData = (state) => state.routes;
export const getRouteById = ({ routes }, route_id) => routes.find((route) => route.route_id === route_id);

// actions
export const GET_ROUTES = createRoutesActionName('GET_ROUTES');
export const GET_ROUTES_LENGTH = createRoutesActionName('GET_ROUTES_LENGTH');

// action creators
export const getRoutes = (payload) => ({ type: GET_ROUTES, payload });
export const getRoutesLength = (length) => ({ type: GET_ROUTES_LENGTH, payload: length });

// fetch
export const fetchRoutes = () => {
  return (dispatch) => {
    fetch(`${API_URL}/routes`)
      .then((res) => res.json())
      .then((routes) => {
        dispatch(getRoutes(routes));
        dispatch(getRoutesLength(routes.length));
      });
  };
};

const routesReducer = (statePart = { data: [], length: 0 }, action) => {
  switch (action.type) {
    case GET_ROUTES:
      return { ...statePart, data: [...action.payload] };
    case GET_ROUTES_LENGTH:
      return { ...statePart, length: action.payload };
    default:
      return statePart;
  }
};

export default routesReducer;
