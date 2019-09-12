import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchPrices } from '../../actions/price_actions';
import Dashboard from './dashboard';

const msp = ({ session, entities }) => ({
  email: session.email,
  first_name: session.first_name,
  last_name: session.last_name,
  portfolio: session.portfolio,
  prices: entities.prices.prices
})

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchPrices: () => dispatch(fetchPrices())
})

export default connect(msp, mdp)(Dashboard);