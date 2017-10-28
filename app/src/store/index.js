import { createStore, combineReducers } from 'redux'
import application from '../application/reducer';

const store = createStore(combineReducers({
  application,
}));

export default store;