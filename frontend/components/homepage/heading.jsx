import React from 'react';
import { Link } from 'react-router-dom';



const Heading = ({ user, logout }) => {
  const sessionLinks = () => (
    <div className="heading-background">
      <header>
        <div className="nav-bar">
          <Link to="/" className="header-link">
            clonebase
          </Link>
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
  );

  // const personalGreeting = () => (
  //   <div className="heading-background">
  //     <header>
  //       <div className="nav-bar">
  //         <Link to="/" className="header-link">
  //           clonebase
  //         </Link>
  //         <nav className="nav-list">
  //           <ul>
  //             <li>Prices</li>
  //             <li>Products</li>
  //             <li>Company</li>
  //           </ul>
  //         </nav>
  //         <div className="end-nav">
  //           <nav className="login-signup">
  //             <button className="header-button" onClick={logout}>Log Out</button>
  //           </nav>
  //         </div>
  //       </div>
  //     </header>
  //   </div>
  //  );

  return sessionLinks();
};

export default Heading;