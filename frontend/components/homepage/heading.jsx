import React from 'react';
import { Link } from 'react-router-dom';



const Heading = ({ currentUser, logout }) => {
  const sessionLinks = () => (
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
            <Link to="/signin">Sign In</Link>
            <Link to="/signup" className="get-started-btn">Get started</Link>
          </nav>
        </div>
      </div>
    </header>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Heading;