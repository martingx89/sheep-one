import { combineReducers } from 'redux';
import dataReducer from './dataRedux';
import userPosition from './userPositionRedux';

const rootReducer = combineReducers({
  tilesData: dataReducer,
  userData: userPosition,
});

export default rootReducer;
