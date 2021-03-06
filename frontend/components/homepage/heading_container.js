import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Heading from './heading';

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heading);