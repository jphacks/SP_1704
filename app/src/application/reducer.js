import initial_state from './initialState';
import * as types from './types';
import deepAssign from 'deep-assign';

const reducers = {
  [types.SET_TAB_INDEX](old_state, action){
    let state = deepAssign({}, old_state);
    state.tab_index = action.tab_index;
    return state;
  },
  [types.SET_VIEW_STATE](old_state, action){
    let state = deepAssign({}, old_state);
    state.view_state = action.view_state;
    return state;
  },
  [types.ADD_TUTOREAL](old_state, action){
    let state = deepAssign({}, old_state);
    state.tutoreals.push(action.tutoreal);
    return state;
  },
  [types.SET_ACTIVE_TUTOREAL_INDEX](old_state, action){
    let state = deepAssign({}, old_state);
    state.active_titoreal_index = action.index;
    return state;
  },
};

const reducer = (state = initial_state, action) => {
  return reducers.hasOwnProperty(action.type) ? reducers[action.type](state, action) : state;
};

export default reducer;
