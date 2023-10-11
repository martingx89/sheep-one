import { combineReducers } from 'redux';
import tilesReducer from './reducers/tilesRedux';
import userReducer from './reducers/userRedux';
import mapReducer from './reducers/mapRedux';

const rootReducer = combineReducers({
  tiles: tilesReducer,
  user: userReducer,
  map: mapReducer
});

export default rootReducer;
