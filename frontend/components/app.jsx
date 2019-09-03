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
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

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
        <AuthRoute exact path="/signin" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;