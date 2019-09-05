import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignUp from '../session_form/signup_form_container'

class CenterMessage extends React.Component{
  render() {
    return(
      <div className="cm-background">
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
      </div>
    )
  }
}

export default CenterMessage;