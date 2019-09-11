import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-header">
            <h2>Your Portfolio</h2>
            <div className="portfolio-list-chart">
              <span>List</span>
              <span>Chart</span>
            </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;