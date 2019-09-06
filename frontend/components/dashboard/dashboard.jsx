import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'
import Heading from '../homepage/heading';

const msp = ({session}) => ({
  email: session.email, 
  first_name: session.first_name
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
})

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-index">
        <Heading />
        <h4>Welcome to the Dashboard!</h4>
      </div>
    )
  }
}

export default connect(msp, mdp)(Dashboard);