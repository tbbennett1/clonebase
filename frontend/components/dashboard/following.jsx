import React from 'react';
import {formatter} from '../../util/price_api_util'

class Following extends React.Component {
  render() {
    this.coin_price = {};
    this.coin_change = {}
    for (let i = 0; i < this.props.prices.length; i++) {
      this.coin_price[this.props.prices[i].symbol] = formatter.format(this.props.prices[i].priceUsd);
      this.coin_change[this.props.prices[i].symbol] = parseFloat((this.props.prices[i].changePercent24Hr)).toFixed(2);
    }
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
              <span>{this.coin_price["BTC"]}</span>
              <h5 style={{ color: this.coin_change["BTC"] > 0 ? "green" : "red" }}>{this.coin_change["BTC"]}%</h5>
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
              <span>{this.coin_price["ETH"]}</span>
              <h5 style={{ color: this.coin_change["ETH"] > 0 ? "green" : "red" }}>{this.coin_change["ETH"]}%</h5>
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
              <span>{this.coin_price["BAT"]}</span>
              <h5 style={{ color: this.coin_change["BAT"] > 0 ? "green" : "red" }}>{this.coin_change["BAT"]}%</h5>
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
              <span>{this.coin_price["ZRX"]}</span>
              <h5 style={{ color: this.coin_change["ZRX"] > 0 ? "green" : "red" }}>{this.coin_change["ZRX"]}%</h5>
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
              <span>{this.coin_price["XLM"]}</span>
              <h5 style={{ color: this.coin_change["XLM"] > 0 ? "green" : "red" }}>{this.coin_change["XLM"]}%</h5>
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
              <span>{this.coin_price["BCH"]}</span>
              <h5 style={{ color: this.coin_change["BCH"] > 0 ? "green" : "red" }}>{this.coin_change["BCH"]}%</h5>
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
              <span>{this.coin_price["XRP"]}</span>
              <h5 style={{ color: this.coin_change["XRP"] > 0 ? "green" : "red" }}>{this.coin_change["XRP"]}%</h5>
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
              <span>{this.coin_price["LTC"]}</span>
              <h5 style={{ color: this.coin_change["LTC"] > 0 ? "green" : "red" }}>{this.coin_change["LTC"]}%</h5>
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
              <span>{this.coin_price["EOS"]}</span>
              <h5 style={{ color: this.coin_change["EOS"] > 0 ? "green" : "red" }}>{this.coin_change["EOS"]}%</h5>
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