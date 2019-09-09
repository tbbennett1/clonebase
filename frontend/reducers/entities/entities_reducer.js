import { combineReducers } from 'redux';

import users from './users_reducer';
import prices from './price_reducer';

const entitiesReducer = combineReducers({
  users,
  prices
});

export default entitiesReducer;