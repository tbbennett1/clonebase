import React from 'react';

class SessionForm extends React.Component {
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
    this.props.processForm(user);
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <label>First name
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="login-input"
              />
            </label>
            <br />
            <label>Last name
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="login-input"
              />
            </label>
            <br />
            <label>Email
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <label>State
              <input type="text"
                value={this.state.state}
                onChange={this.update('state')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;