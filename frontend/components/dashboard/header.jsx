import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/session_actions'

class Header extends React.Component {
  constructor(props){
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut(e){
    e.preventDefault();
    logout();
  }

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
              <form className="login-signup" onSubmit={this.signOut}>
                <input className="header-button" type="submit" value="Sign Out"></input>
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;