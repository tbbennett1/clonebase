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
              <div className="symbol">
                <img src={window.btc_logo}/>
                <label>Bitcoin</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$10,353.94</span>
              <h5>-0.07%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.eth_logo}/>
                <label>Ethereum</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$183.24</span>
              <h5>+2.42%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.bat_logo}/>
                <label>Basic Attention Token</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$0.17</span>
              <h5>-0.55%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.zrx_logo}/>
                <label>0x</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$0.17</span>
              <h5>+1.6%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.xlm_logo}/>
                <label>Stellar Lumens</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$0.06</span>
              <h5>+0.47%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.bch_logo}/>
                <label>Bitcoin Cash</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$293.29</span>
              <h5>-1.57%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.xrp_logo}/>
                <label>Ripple</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$0.29</span>
              <h5>-2.07%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.ltc_logo}/>
                <label>Litecoin</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$68.71</span>
              <h5>-2.11%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="following-item-head">
              <div className="symbol">
                <img src={window.eos_logo}/>
                <label>EOS</label>
              </div>
              <div className="interval">24h</div>
            </div>
            <div className="following-item-price">
              <span>$3.68</span>
              <h5>-1.95%</h5>
            </div>
            <div className="following-item-chart">
              <div>~~~~~~~~~~~</div>
            </div>
          </div>

          <div className="following-item">
            <div className="discover-more">
              <div>Discover more assets ></div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Following;