import { INITIAL_STATE } from '../constants/initialData';

// selectors
export const getCoords = (state) => state.userData;

// actions
const createActionName = (actionName) => `app/data/${actionName}`;
export const GET_USER_LOCATION_REQUEST = createActionName('GET_USER_LOCATION_REQUEST'); // Request action
export const GET_USER_LOCATION_SUCCESS = createActionName('GET_USER_LOCATION_SUCCESS'); // Success action
export const GET_USER_LOCATION_ERROR = createActionName('GET_USER_LOCATION_ERROR'); // Error action
export const SET_USER_LOCATION = createActionName('SET_USER_LOCATION');

// action creators
export const requestGetGPS = () => ({ type: GET_USER_LOCATION_REQUEST });
export const receiveGetGPS = (payload) => ({ type: GET_USER_LOCATION_SUCCESS, payload });
export const errorGetGPS = (error) => ({ type: GET_USER_LOCATION_ERROR, error });

export const fetchGPSData = () => {
  return async (dispatch) => {
    try {
      dispatch(requestGetGPS()); // Dispatch the request action
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords);
          },
          (error) => {
            reject(error);
          }
        );
      });
      dispatch(receiveGetGPS([position.latitude, position.longitude])); // Dispatch the success action
    } catch (error) {
      dispatch(errorGetGPS(error.message)); // Dispatch the error action
    }
  };
};

const userPositionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return action.payload;
    case GET_USER_LOCATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default userPositionReducer;
