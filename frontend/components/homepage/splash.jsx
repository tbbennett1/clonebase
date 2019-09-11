import React from 'react';
import {Link} from 'react-router-dom';
import Heading from './heading_container';
import CenterMessage from './center_message';
import AssetTable from './asset_table_container';
import Features from './features';
import Stats from './stats';
import GetStarted from './get_started';
import Footer from './footer';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <Heading />
        <CenterMessage />
        <AssetTable />
        <Features />
        <Stats />
        <GetStarted />
        <Footer />
      </div>
    )
  }
}

export default Splash;