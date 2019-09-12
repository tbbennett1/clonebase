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
    this.total_value = 0;
    const portfolio = this.props.portfolio;
    for (let i = 0; i < portfolio.length; i++) {
      this.total_value += (portfolio[i].amount * this.props.prices[i].priceUsd);
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
                    <p>{Math.floor(100 * ((portfolio[0].amount * this.props.prices[0].priceUsd)/this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{portfolio[0].amount} BTC</td>
                <td className="usd-value">{formatter.format(portfolio[0].amount * this.props.prices[0].priceUsd)}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.eth_logo}/>
                  <h4>Ethereum</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-eth"></div>
                    <p>{Math.floor(100 * ((portfolio[1].amount * this.props.prices[1].priceUsd)/this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{portfolio[1].amount} ETH</td>
                <td className="usd-value">{formatter.format(portfolio[1].amount * this.props.prices[1].priceUsd)}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.bat_logo}/>
                  <h4>Basic Attention Token</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-bat"></div>
                    <p>10%</p>
                  </div>
                </td>
                <td className="coin-amount">{portfolio[3].amount} BAT</td>
                <td className="usd-value">{formatter.format(portfolio[3].amount * this.props.prices[12].priceUsd)}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.zrx_logo}/>
                  <h4>0x</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-zrx"></div>
                    <p>10%</p>
                  </div>
                </td>
                <td className="coin-amount">{portfolio[4].amount} ZRX</td>
                <td className="usd-value">{formatter.format(portfolio[4].amount * this.props.prices[14].priceUsd)}</td>
              </tr>
              <tr>
                <td>
                  <img src={window.ltc_logo}/>
                  <h4>Litecoin</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-ltc"></div>
                    <p>{Math.floor(100 * ((portfolio[3].amount * this.props.prices[4].priceUsd) / this.total_value))}%</p>
                  </div>
                </td>
                <td className="coin-amount">{portfolio[3].amount} LTC</td>
                <td className="usd-value">{formatter.format(portfolio[3].amount * this.props.prices[4].priceUsd)}</td>
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