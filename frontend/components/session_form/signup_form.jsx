import React from 'react';

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
      <div className="session-form-container">
        <h2>Create your account</h2>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <br />
          {this.renderErrors()}
          <div className="session-form">
            <div className="box-form">
              <label>First name
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className="session-input"
                  placeholder="First name"
                />
              </label>
              <br />
              <label>Last name
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className="session-input"
                  placeholder="Last name"
                />
              </label>
              <br />
              <label>Email
                <input type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-input"
                  placeholder="Your email address"
                />
              </label>
              <br />
              <label>Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-input"
                  placeholder="Choose a password"
                />
              </label>
              <br />
              <label>State
                <input type="text"
                  value={this.state.state}
                  onChange={this.update('state')}
                  className="session-input"
                  placeholder="California"
                />
              </label>
              <br />
              <input className="session-submit" type="submit" value="Create account" />
            </div>
              {this.props.navLink}
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;