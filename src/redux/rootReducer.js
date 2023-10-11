import { combineReducers } from 'redux';
import dataReducer from './dataRedux';

const rootReducer = combineReducers({
  tilesData: dataReducer,
});

export default rootReducer;
