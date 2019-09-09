import React from 'react';

class PortfolioVal extends React.Component{
  render(){
    return(
      <div className="portfolio-value">
        <div className="portfolio-value-head">
          <span>YOUR PORTFOLIO VALUE</span>
          <span className="value">$100,274.73</span>
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