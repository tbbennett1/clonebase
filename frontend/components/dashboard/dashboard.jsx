import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'
import Header from './header';
import PortfolioVal from './portfolio_val';

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
        <div className="db">
          <div className="dashboard-top">
            <PortfolioVal />
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
      </div>
    )
  }
}

export default connect(msp, mdp)(Dashboard);