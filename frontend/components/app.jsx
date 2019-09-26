import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute, LoggedInRoute } from '../util/route_util';
import SignUp from './session_form/signup_form_container';
import LogIn from './session_form/login_form_container';
import Splash from './homepage/splash';
import Price from './price/price_container';
import Dashboard from './dashboard/dashboard_container'
import PageNotFound from './page_not_found';

const App = () => (
  <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/signin" component={LogIn} />
      <AuthRoute exact path="/signup" component={SignUp} />
      <Route exact path="/price" component={Price} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <Route component={PageNotFound} />
  </Switch>
);

export default App;