import { combineReducers } from 'redux';
import tilesReducer from './tilesRedux';
import userReducer from './userRedux';

const rootReducer = combineReducers({
  tiles: tilesReducer,
  user: userReducer,
});

export default rootReducer;
