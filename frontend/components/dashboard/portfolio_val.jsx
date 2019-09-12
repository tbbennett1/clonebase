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

    this.total_value = 0;
    const portfolio = this.props.portfolio;
    for(let i = 0; i < portfolio.length; i++){
      this.total_value += (portfolio[i].amount * this.props.prices[i].priceUsd);
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