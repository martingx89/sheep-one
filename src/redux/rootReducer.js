import { combineReducers } from 'redux';
import routesReducer from './reducers/routesRedux';
import userReducer from './reducers/userRedux';
import mapReducer from './reducers/mapRedux';

const rootReducer = combineReducers({
  routes: routesReducer,
  user: userReducer,
  map: mapReducer,
});

export default rootReducer;
