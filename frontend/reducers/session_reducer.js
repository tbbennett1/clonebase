import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null,
  email: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.currentUser.id, email: action.currentUser.email,
        first_name: action.currentUser.first_name });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;