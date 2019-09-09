import * as PriceAPI from '../util/price_api_util';

export const RECEIVE_PRICES = "RECEIVE_PRICES";

export const receivePrices = prices => ({
  type: RECEIVE_PRICES,
  prices
})

export const fetchPrices = () => dispatch => (
  PriceAPI.getPrices().then(prices => dispatch(receivePrices(prices)))
)