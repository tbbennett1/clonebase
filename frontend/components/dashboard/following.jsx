import React from 'react';

class Following extends React.Component {
  render() {
    return (
      <div className="following-container">
        <div className="following-header">
          <h2>Following</h2>
          <div className="following-edit-box">
            <span>Edit</span>
            <div>
              <svg></svg>
              <svg></svg>
            </div>
          </div>
        </div>
        <div className="following-grid">
          <div className="following-item">
            <div className="following-item-head">
              <img src="" alt=""/>
              <label>Bitcoin</label>
              <span>24h</span>
            </div>
            <div className="following-item-price">
              <span>$10,353.94</span>
              <h5>-0.07%</h5>
            </div>
            <div className="following-item-chart">
              <svg>~~~~~~~~~~~</svg>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <img src="" alt=""/>
              <label>Ethereum</label>
              <span>24h</span>
            </div>
            <div className="following-item-price">
              <span>$183.24</span>
              <h5>+2.42%</h5>
            </div>
            <div className="following-item-chart">
              <svg>~~~~~~~~~~~</svg>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <img src="" alt=""/>
              <label>Basic Attention Token</label>
              <span>24h</span>
            </div>
            <div className="following-item-price">
              <span>$0.17</span>
              <h5>-0.55%</h5>
            </div>
            <div className="following-item-chart">
              <svg>~~~~~~~~~~~</svg>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <img src="" alt=""/>
              <label>0x</label>
              <span>24h</span>
            </div>
            <div className="following-item-price">
              <span>$0.17</span>
              <h5>+1.6%</h5>
            </div>
            <div className="following-item-chart">
              <svg>~~~~~~~~~~~</svg>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <img src="" alt=""/>
              <label>Stellar Lumens</label>
              <span>24h</span>
            </div>
            <div className="following-item-price">
              <span>$0.06</span>
              <h5>+0.47%</h5>
            </div>
            <div className="following-item-chart">
              <svg>~~~~~~~~~~~</svg>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Following;