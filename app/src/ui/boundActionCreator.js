import store from '../store/index';

const bound_action_creator = (type, payload) => {
  store.dispatch({
    type,
    ...payload,
  });
};

export default bound_action_creator;
