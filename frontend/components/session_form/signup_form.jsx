import React from 'react';
import Heading from '../homepage/heading';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      state: ''
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
    this.props.signup(user);
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
        <div className="session-form-container">
          <div className="sfc-box">
            <h2>Create your account</h2>
            <form onSubmit={this.handleSubmit} className="session-form-box">
              {this.renderErrors()}
              <div className="session-form">
                <div className="box-form">
                  <div className="form-row">
                    <label>
                      <span>First name</span>
                      <input type="text"
                        value={this.state.first_name}
                        onChange={this.update('first_name')}
                        className="session-input"
                        placeholder="First name"
                      />
                    </label>
                    <label>
                      <span>Last name</span>
                      <input type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')}
                        className="session-input"
                        placeholder="Last name"
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      <span>Email</span>
                      <input type="email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="session-input"
                        placeholder="Your email address"
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      <span>Password</span>
                      <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="session-input"
                        placeholder="Choose a password"
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      <span>State</span>
                      <input type="text"
                        value={this.state.state}
                        onChange={this.update('state')}
                        className="session-input"
                        placeholder="California"
                      />
                    </label>
                  </div>
                  <input className="session-submit" type="submit" value="Create account" />
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

export default SignupForm;