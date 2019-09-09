import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/session_actions';

class Header extends React.Component {
  render () {
    return (
      <div className="header-background">
        <header>
          <div className="nav-bar">
            <Link to="/" className="header-link">
              clonebase
            </Link>
            <nav className="nav-list">
              <ul>
                <li>Prices</li>
                <li>Products</li>
                <li>Company</li>
              </ul>
            </nav>
            <div className="end-nav">
              <nav className="login-signup">
                <button className="header-button" onClick={logout}>Log Out</button>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;