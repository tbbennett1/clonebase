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
import Greeting from './homepage/heading_container';
import SignUp from './session_form/signup_form_container';
import LogIn from './session_form/login_form_container';
import CenterMessage from './homepage/center_message';
import AssetTable from './homepage/asset_table';
import Splash from './homepage/splash';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/signin" component={LogIn} />
        <AuthRoute exact path="/signup" component={SignUp} />
    </Switch>

);

export default App;