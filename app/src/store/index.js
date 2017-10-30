import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import application from '../application/reducer';
import infrastructure from '../infrastructure/reducer';

import tutorealFetcher from '../infrastructure/tutorealFetcher';

const store = createStore(combineReducers({
  application,
  infrastructure,
}), applyMiddleware(tutorealFetcher));

export default store;
