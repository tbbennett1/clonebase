import React from 'react';

import Header from './header';
import PortfolioVal from './portfolio_val';
import Following from './following';
import Portfolio from './portfolio';
import RecentActivity from './recent_activity';
import Footer from '../homepage/footer';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPrices();
  }

  render() {
    if (!this.props.prices) {
      return (
        <div className="loading">
        </div>
      )
    }

    return (
        <div className="dashboard-index">
          <Header logout={this.props.logout}/>
          <div className="db">
            <div className="dashboard-top">
              <PortfolioVal portfolio={this.props.portfolio} prices={this.props.prices}/>
              <Following prices={this.props.prices}/>
              <div className="portfolio-ra">
                <Portfolio portfolio={this.props.portfolio} prices={this.props.prices}/>
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Dashboard;