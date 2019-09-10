import { getPrices } from '../util/price_api_util';

export const RECEIVE_PRICES = "RECEIVE_PRICES";

export const receivePrices = response => ({
  type: RECEIVE_PRICES,
  response
});

export const fetchPrices = () => dispatch => (
  getPrices().then(response => (dispatch(receivePrices(response))))
);