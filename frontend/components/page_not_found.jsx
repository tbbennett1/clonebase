
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Heading from './homepage/heading';

class PageNotFound extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="PageNotFound">
        <div>
          <h1>404: PAGE NOT FOUND</h1>
          <p>Sorry we couldn't find this url.</p>
          <button onClick={this.onClick}>Click Here to go back to Clonebase</button>
        </div>
      </div>
    );
  }
}

export default withRouter(PageNotFound);