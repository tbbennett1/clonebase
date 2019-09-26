import React from 'react';
import { Link } from 'react-router-dom';



class Heading extends React.Component {
  render() {
    return (
      <div className="heading-background">
        <header>
          <div className="nav-bar">
            <Link to="/" className="header-link">clonebase</Link>
            <nav className="nav-list">
              <ul>
                <li><Link to="/price" id="price-link">Prices</Link></li>
                <li>Products</li>
                <li>Company</li>
              </ul>
            </nav>
            <div className="end-nav">
              <nav className="login-signup">
                <Link to="/signin">Sign In</Link>
                <Link to="/signup" className="get-started-btn">Get started</Link>
              </nav>
            </div>
          </div>
        </header>
      </div>
    )
  }
};

export default Heading;