import { INITIAL_STATE } from '../constants/initialData';

const userPositionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_LOCATION':
      return action.payload;
    default:
      return state;
  }
};

export default userPositionReducer;
