import React from 'react';
import {Link} from 'react-router-dom';
import Heading from './heading_container';
import CenterMessage from './center_message';
import AssetTable from './asset_table';
import Features from './features';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <Heading />
        <CenterMessage />
        <AssetTable />
        <Features />
      </div>
    )
  }
}

export default Splash;