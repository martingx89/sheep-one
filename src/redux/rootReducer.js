import { combineReducers } from 'redux';
import dataReducer from './dataRedux';
import userPosition from './userPositionRedux';

const rootReducer = combineReducers({
  data: dataReducer,
  userPosition: userPosition,
});

export default rootReducer;
