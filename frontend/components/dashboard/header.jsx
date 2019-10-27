import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(e){
    e.preventDefault();
    this.props.logout()
    .then(this.props.history.push('/'));
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
                <li><Link to="/price" id="db-price-link">Prices</Link></li>            
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

export default withRouter(Header);