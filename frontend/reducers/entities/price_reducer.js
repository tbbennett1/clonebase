import { RECEIVE_PRICES } from '../../actions/price_actions';

const PriceReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PRICES:
      return action.prices;
    default:
      return state;
  }
};

export default PriceReducer;