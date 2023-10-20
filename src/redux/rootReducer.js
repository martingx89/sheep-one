import { combineReducers } from 'redux';
import routesReducer from './reducers/routesRedux';
import userReducer from './reducers/userRedux';
import mapReducer from './reducers/mapRedux';
import bikesReducer from './reducers/bikesRedux';

const rootReducer = combineReducers({
  routes: routesReducer,
  user: userReducer,
  map: mapReducer,
  bikes: bikesReducer,
});

export default rootReducer;
