import React from 'react';
import {withRouter} from 'react-router-dom';
import Heading from '../homepage/heading';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoLogin(e){
    e.preventDefault();
    const demoUser = {email: "brock@clonebase.com", password: "password"};
    this.props.login(demoUser);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.errors.pop();
    this.render();
  }

  renderErrors() {
    return (
      <div className="login-errors">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
        <button className="close" onClick={this.handleClick} >Close</button>
      </div >
    );
  }

  render() {
    let errors = this.props.errors;
    return (
      <div>
        <Heading />
        <div className="session-form-container-login">
          <div className="sfc-box">
            {errors.length > 0 ? this.renderErrors() : null} 
            <h2>Sign in to Clonebase</h2>
            <form onSubmit={this.handleSubmit} className="session-form-box-login">
              <div className="session-form">
                <div className="box-form">
                  <label>
                    <input type="email"
                      value={this.state.email}
                      onChange={this.update('email')}
                      className="session-input-login"
                      placeholder="Email"
                    />
                  </label>
                  <br />
                  <label>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="session-input-login"
                      placeholder="Password"
                    />
                  </label>
                  <div className="login-btns">
                    <input className="session-submit-login" onClick={this.demoLogin} type="submit" value="DEMO" />
                    <input className="session-submit-login" type="submit" value="SIGN IN" />
                  </div>
                </div>
              </div>
            </form>
            {this.props.navLink}
          </div>
          </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);