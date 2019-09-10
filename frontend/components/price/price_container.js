import { connect } from 'react-redux';
import Price from './price';
import { fetchPrices } from '../../actions/price_actions';

const msp = ({entities}) => {
  return ({
    prices: entities.prices.prices
  });
};

const mdp = (dispatch) => {
  return ({
    fetchPrices: () => dispatch(fetchPrices())
  })
}

export default connect(msp, mdp)(Price);
