import { combineReducers } from 'redux';
import tilesReducer from './reducers/tilesRedux';
import userReducer from './reducers/userRedux';

const rootReducer = combineReducers({
  tiles: tilesReducer,
  user: userReducer,
});

export default rootReducer;
