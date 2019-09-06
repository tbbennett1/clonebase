import React from 'react';

class Features extends React.Component {
  render() {
    return (
      <div className="features-top">
        <div className="features-box">
          <h1>Create your cryptocurrency portfolio today</h1>
          <p>Clonebase has a variety of features that make it the best place to practice trading</p>
          <div className="pic-container">
            <div className="feature-info">
              <div>
                <img src={window.features_mngprtflio} />
                <div className="feature-info-box">
                  <h3>Manage your portfolio</h3>
                  <p>Buy and sell popular digital currencies, keep track of them in one place</p>
                </div>
              </div>
              <div>
                <img src={window.features_recbuys} />
                <div className="feature-info-box">
                  <h3>Recurring buys</h3>
                  <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly</p>
                </div>
              </div>
              <div>
                <img src={window.features_vault} />
                <div className="feature-info-box">
                  <h3>Vault Protection</h3>
                  <p>For added security, story your funds in a vault with time delayed withdrawals</p>
                </div></div>
              <div>
                <img src={window.features_vault} />
                <div className="feature-info-box">
                  <h3>Mobile apps</h3>
                  <p>Clonebase does not have any, but give me two more weeks and who knows.</p>
                </div>
              </div>
            </div>
            <div className="feature-pic">
              <picture>
                <img src={window.features_pic} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Features;