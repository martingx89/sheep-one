import { combineReducers } from 'redux';
import tilesReducer from './tilesRedux';

const rootReducer = combineReducers({
  tiles: tilesReducer,
});

export default rootReducer;
