import React from 'react';
import {formatter} from '../../util/price_api_util';

class Portfolio extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    if (!this.props.prices || !this.props.portfolio) {
      return (
        <div className="loading">
        </div>
      )
    }
    this.coin_amount = {};
    this.coin_price = {};
    this.total_value = 0;
    const portfolio = this.props.portfolio;
    for(let i = 0; i < this.props.prices.length; i++){
      this.coin_price[this.props.prices[i].symbol] = this.props.prices[i].priceUsd;
    }
    for (let i = 0; i < portfolio.length; i++) {
      this.coin_amount[portfolio[i].coin_sym] = portfolio[i].amount;
      this.total_value += (this.coin_amount[portfolio[i].coin_sym] * this.coin_price[portfolio[i].coin_sym]);
    }
    return (
      <div className="portfolio-container">
        <div className="portfolio-header">
            <h2>Your Portfolio</h2>
            <div className="portfolio-list-chart">
              <span>List</span>
              <span>Chart</span>
            </div>
        </div>
        <div className="portfolio-data">
          <table className="prt-data-table">
            <tbody>
              <tr>
                <td>
                  <img src={window.btc_logo}/>
                  <h4>Bitcoin</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-btc"></div>
                    <p>{Math.floor(100 * ((this.coin_amount["BTC"] * this.coin_price["BTC"])/this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{this.coin_amount["BTC"]} BTC</td>
                <td className="usd-value">{formatter.format(this.coin_amount["BTC"] * this.coin_price["BTC"])}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.eth_logo}/>
                  <h4>Ethereum</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-eth"></div>
                    <p>{Math.floor(100 * ((this.coin_amount["ETH"] * this.coin_price["ETH"]) / this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{this.coin_amount["ETH"]} ETH</td>
                <td className="usd-value">{formatter.format(this.coin_amount["ETH"] * this.coin_price["ETH"])}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.ltc_logo}/>
                  <h4>Litecoin</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-ltc"></div>
                    <p>{Math.floor(100 * ((this.coin_amount["LTC"] * this.coin_price["LTC"]) / this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{this.coin_amount["LTC"]} LTC</td>
                <td className="usd-value">{formatter.format(this.coin_amount["LTC"] * this.coin_price["LTC"])}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.bat_logo}/>
                  <h4>Basic Attention Token</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-bat"></div>
                    <p>{Math.floor(100 * ((this.coin_amount["BAT"] * this.coin_price["BAT"]) / this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{this.coin_amount["BAT"]} BAT</td>
                <td className="usd-value">{formatter.format(this.coin_amount["BAT"] * this.coin_price["BAT"])}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.zrx_logo}/>
                  <h4>0x</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-zrx"></div>
                    <p>{Math.floor(100 * ((this.coin_amount["ZRX"] * this.coin_price["ZRX"]) / this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{this.coin_amount["ZRX"]} ZRX</td>
                <td className="usd-value">{formatter.format(this.coin_amount["ZRX"] * this.coin_price["ZRX"])}</td>
              </tr>
            </tbody>
          </table>
          <div className="balance">
            <span>Total Balance = {formatter.format(this.total_value)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;