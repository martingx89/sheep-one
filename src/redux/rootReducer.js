import { combineReducers } from 'redux';
import routesReducer from './reducers/routesRedux';
import userReducer from './reducers/userRedux';
import mapReducer from './reducers/mapRedux';
import bikesReducer from './reducers/bikesRedux';
import counterReducer from './reducers/counterRedux';

const rootReducer = combineReducers({
  routes: routesReducer,
  user: userReducer,
  map: mapReducer,
  bikes: bikesReducer,
  counter: counterReducer,
});

export default rootReducer;
