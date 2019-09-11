import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'
import Header from './header';
import PortfolioVal from './portfolio_val';
import Following from './following';
import Portfolio from './portfolio';
import RecentActivity from './recent_activity';

const msp = ({session}) => ({
  email: session.email, 
  first_name: session.first_name,
  last_name: session.last_name,
  portfolio: session.portfolioItems
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
            <Following />
            <div className="portfolio-ra">
              <Portfolio />
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(Dashboard);