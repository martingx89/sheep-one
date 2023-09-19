import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InitialState from './InitialState';
import dataReducer from './dataRedux';

const subreducers = {
  data: dataReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  InitialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

export default store;
