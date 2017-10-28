import initial_state from './initialState';
import * as types from './types';

const reducers = {
  [types.INCREMENT](state, action){
    let new_state = {...state};
    new_state.count++;
    return new_state;
  },
};

const reducer = (state = initial_state, action) => {
  return reducers.hasOwnProperty(action.type) ? reducers[action.type](state, action) : state;
};

export default reducer;