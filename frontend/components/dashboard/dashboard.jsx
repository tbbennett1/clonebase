import React from 'react';
import Heading from '../homepage/heading';

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

export default Dashboard;