import React from 'react';
import { connect } from 'react-redux';
import { fetchPrices } from '../../actions/price_actions';
import Price from './price';

const msp = ({entities}) => ({
  prices: entities.prices
})

const mdp = (dispatch) => ({
  fetchPrices: () => dispatch(fetchPrices)
})

export default connect(msp, mdp)(Price);
