import React from 'react';
import Heading from '../homepage/heading';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <Heading />
        <div className="session-form-container-login">
          <h2>Sign in to Clonebase</h2>
          <form onSubmit={this.handleSubmit} className="session-form-box-login">
            {this.renderErrors()}
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
                <br />
                <input className="session-submit" type="submit" value="SIGN IN" />
                <br />
              </div>
            </div>
          </form>
          {this.props.navLink}
        </div>
      </div>
    );
  }
}

export default LoginForm;