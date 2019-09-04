import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Greeting from './greeting/greeting_container';
import SignUp from './session_form/signup_form_container';
import LogIn from './session_form/login_form_container';

const App = () => (
  <div>
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
        <GreetingContainer/>
      </div>
    </header>
    <Switch>
        <Route to="/" component={Greeting} />
        <AuthRoute exact path="/signin" component={LogIn} />
        <AuthRoute exact path="/signup" component={SignUp} />
    </Switch>
  </div>
);

export default App;