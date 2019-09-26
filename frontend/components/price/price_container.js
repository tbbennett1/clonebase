import { connect } from 'react-redux';
import Price from './price';
import { fetchPrices } from '../../actions/price_actions';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
  return ({
    prices: state.entities.prices.prices,
    currentUser: state.session
  });
};

const mdp = (dispatch) => {
  return ({
    fetchPrices: () => dispatch(fetchPrices()),
    logout: () => dispatch(logout())
  })
}

export default connect(msp, mdp)(Price);
