import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'
import Header from './header';

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
        <Header logout={this.props.logout}/>
        <div className="dashboard-top">
          <div className="portfolio-value">

          </div>
          <section className="following">

          </section>
          <div className="portfolio-ra">
            <div className="portfolio">

            </div>
            <div className="recent-activity">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(Dashboard);