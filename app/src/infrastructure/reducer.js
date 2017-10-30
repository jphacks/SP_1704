import initial_state from './initialState';
import * as types from './types';
import deepAssign from 'deep-assign';

const reducers = {
  [types.SET_BEACON](old_state, action){
    let state = deepAssign({}, old_state);
    const current_beacon = state.beacons.find(x => x.major === action.beacon.major &&  x.minor === action.beacon.minor);
    if(current_beacon === undefined){
      state.beacons = [...state.beacons, action.beacon];
    }else{
      state.beacons[state.beacons.indexOf(current_beacon)] = action.beacon;
    }
    return state;
  },
  [types.SET_BEACONS](old_state, action){
    let state = deepAssign({}, old_state);
    for(let beacon of action.beacons)state = reducers[types.SET_BEACON](state, {beacon});
    return state;
  },
  [types.ADD_TUTOREAL](old_state, action){
    let state = deepAssign({}, old_state);
    state.tutoreals.push(action.tutoreal);
    return state;
  },
};

const reducer = (state = initial_state, action) => {
  return reducers.hasOwnProperty(action.type) ? reducers[action.type](state, action) : state;
};

export default reducer;
