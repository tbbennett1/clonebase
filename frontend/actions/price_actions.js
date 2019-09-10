import { getPrices } from '../util/price_api_util';

export const RECEIVE_PRICES = "RECEIVE_PRICES";

export const receivePrices = prices => ({
  type: RECEIVE_PRICES,
  prices
});

export const fetchPrices = () => dispatch => (
  getPrices().then(prices => {
    // debugger
    let res = dispatch(receivePrices(prices))
    return res;
  })
);