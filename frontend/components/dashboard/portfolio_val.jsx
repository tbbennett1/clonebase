import React from 'react';
import {formatter} from '../../util/price_api_util';

class PortfolioVal extends React.Component{  
  render(){
    if (!this.props.prices || !this.props.portfolio) {
      return (
        <div className="loading">
        </div>
      )
    }

    this.coin_amount = {};
    this.coin_price = {};
    this.total_value = 0;
    const portfolio = this.props.portfolio;
    for (let i = 0; i < this.props.prices.length; i++) {
      this.coin_price[this.props.prices[i].symbol] = this.props.prices[i].priceUsd;
    }
    for (let i = 0; i < portfolio.length; i++) {
      this.coin_amount[portfolio[i].coin_sym] = portfolio[i].amount;
      this.total_value += (this.coin_amount[portfolio[i].coin_sym] * this.coin_price[portfolio[i].coin_sym]);
    }
    return(
      <div className="portfolio-value">
        <div className="portfolio-value-head">
          <span>YOUR PORTFOLIO VALUE</span>
          <span className="value">{formatter.format(this.total_value)}</span>
          <ul>
            <li>1H</li>
            <li>24H</li>
            <li>1W</li>
            <li>1M</li>
            <li>1Y</li>
            <li>ALL</li>
          </ul>
        </div>
        <div className="portfolio-value-body">
          <div className="pv-chart">
            <img src={window.pv_chart}/>
          </div>
          <div className="pv-timeline">
            <span>AUG 9</span>
            <span>AUG 15</span>
            <span>AUG 20</span>
            <span>AUG 25</span>
            <span>AUG 30</span>
            <span>SEP 4</span>
            <span>SEP 9</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioVal;