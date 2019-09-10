import { RECEIVE_PRICES } from '../../actions/price_actions';

const PriceReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRICES:
      let newState = Object.assign({}, state, {
        prices: action.prices
      })
      return newState;
    default:
      return state;
  }
};

export default PriceReducer;