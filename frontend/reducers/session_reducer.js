import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  portfolio: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id, email: action.user.email,
        first_name: action.user.first_name, last_name: action.user.last_name,
        portfolio: action.user.portfolioItems };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;