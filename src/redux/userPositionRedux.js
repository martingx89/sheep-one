import { INITIAL_STATE } from '../constants/initialData';
import { createUserActionName } from '../utils/actionsUtility';
import { usePosition } from 'use-position';

// selectors
export const getUserData = (state) => state.userData;

// actions
export const SET_USER_LOCATION = createUserActionName('SET_USER_LOCATION');

// action creators
export const requestGetGPS = (payload) => ({ type: SET_USER_LOCATION, payload });

const userPositionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default userPositionReducer;
