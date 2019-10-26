import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';


class Heading extends React.Component {
  constructor(props){
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToBottom() {
    let scroll = Scroll.animateScroll;
    scroll.scrollToBottom();
  };

  scrollToTop() {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="heading-background">
        <header>
          <div className="nav-bar">
            <Link to="/" onClick={this.scrollToTop} className="header-link">clonebase</Link>
            <nav className="nav-list">
              <ul>
                <li><Link to="/price" id="price-link">Prices</Link></li>
                <li onClick={this.scrollToBottom}>About</li>
                
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