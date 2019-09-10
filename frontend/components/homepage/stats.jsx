import React from 'react';

class Stats extends React.Component {
  render() {
    return (
      <div className="stats-top">
        <div className="stats-inner">
          <h1>$150B+</h1>
          <span>Cryptocurrency exchanged</span>
        </div>
        <div className="stats-inner">
          <h1>102</h1>
          <span>Countries supported</span>
        </div>
        <div className="stats-inner">
          <h1>30M+</h1>
          <span>Customers served</span>
        </div>
      </div>
    )
  }
}

export default Stats;