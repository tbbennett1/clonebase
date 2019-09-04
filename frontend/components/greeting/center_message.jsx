import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignUp from '../session_form/signup_form_container'

class CenterMessage extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {email: ""};

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //   return <Route path='/signup' component={SignUp} />
  // }

  // update(email){
  //   this.setState({email})
  // }

  render() {
    return(
      <div className="center-message">
        <div className="center-message-padding">
          <span>Buy and sell cryptocurrency</span>
          <h4>Clonebase is the easiest place to practice buying and selling cryptocurrency</h4>
          <div className="cm-email-form">
            <form>
              <input type="email" placeholder="Email address" />
              <Link to="/signup" >
                <button type="button" className="cm-button">
                    Get started
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CenterMessage;