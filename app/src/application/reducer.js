import initial_state from './initialState';
import * as types from './types';
import deepAssign from 'deep-assign';

const reducers = {
  [types.INCREMENT](old_state, action){
    let state = deepAssign({}, old_state);
    state.count++;
    return state;
  },
};

const reducer = (state = initial_state, action) => {
  return reducers.hasOwnProperty(action.type) ? reducers[action.type](state, action) : state;
};

export default reducer;
