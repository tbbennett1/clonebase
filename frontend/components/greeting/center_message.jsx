import React from 'react';

class CenterMessage extends React.Component{
  render() {
    return(
      <div className="center-message">
        <div className="center-message-padding">
          <span>Buy and sell cryptocurrency</span>
          <h4>Clonebase is the easiest place to practice buying and selling cryptocurrency</h4>
          <div className="cm-email-form">
            <form>
              <input type="email" placeholder="Email address" />
              <button type="green" className="cm-button">
                <span>Get started</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CenterMessage;