import React from 'react';
import Heading from '../homepage/heading_container';
import Header from '../dashboard/header';
import {formatter} from '../../util/price_api_util';

class Price extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPrices();
  }

  render () {
    if(!this.props.prices){
      return(
        <div className="loading">
        </div>
      )
    }

    this.coin_price = {};
    this.coin_change = {}
    for (let i = 0; i < this.props.prices.length; i++) {
      this.coin_price[this.props.prices[i].symbol] = formatter.format(this.props.prices[i].priceUsd);
      this.coin_change[this.props.prices[i].symbol] = parseFloat((this.props.prices[i].changePercent24Hr)).toFixed(2);
    }
    let heading;
    if(this.props.currentUser.id){
      heading = <Header logout={this.props.logout}/>;
    }else{
      heading = <Heading />;
    }

    return(
      <div className="price-index">
        {heading}
        <div className="price-top">
          <div className="price-inner">
            <div className="search-box">
              <section>
                <div className="search-bar">
                  <img src={window.search} />
                  <input type="text" placeholder="Search all assets..."/>
                </div>
                <div className="search-time">
                  <ul>
                    <li>1H</li>
                    <li>24H</li>
                    <li>1W</li>
                    <li>1M</li>
                    <li>1Y</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="price-at">
              <table className="asset-table">
                <thead className="at-head">
                  <tr className="at-row">
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Market Cap</th>
                    <th>Trade</th>
                  </tr>
                </thead>
                <tbody className="at-body">
                  <tr>
                    <td><a href="https://bitcoin.org/en/">1</a></td>
                    <td className="at-deets">
                      <a href="https://bitcoin.org/en/">
                        <img src={window.btc_logo} />
                        <span>Bitcoin</span>
                        <h4>BTC</h4>
                      </a>
                    </td>
                    <td>{this.coin_price["BTC"]}</td>
                    <td style={{ color: this.coin_change["BTC"] > 0 ? "green" : "red" }}>{this.coin_change["BTC"]}%</td>
                    <td>$189B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="at-deets">
                      <img src={window.eth_logo} />
                      <span>Ethereum</span>
                      <h4>ETH</h4>
                    </td>
                    <td>{this.coin_price["ETH"]}</td>
                    <td style={{ color: this.coin_change["ETH"] > 0 ? "green" : "red" }}>{this.coin_change["ETH"]}%</td>
                    <td>$18.5B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="at-deets">
                      <img src={window.xrp_logo} />
                      <span>Ripple</span>
                      <h4>XRP</h4>
                    </td>
                    <td>{this.coin_price["XRP"]}</td>
                    <td style={{ color: this.coin_change["XRP"] > 0 ? "green" : "red" }}>{this.coin_change["XRP"]}%</td>
                    <td>$11B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="at-deets">
                      <img src={window.bch_logo} />
                      <span>Bitcoin Cash</span>
                      <h4>BCH</h4>
                    </td>
                    <td>{this.coin_price["BCH"]}</td>
                    <td style={{ color: this.coin_change["BCH"] > 0 ? "green" : "red" }}>{this.coin_change["BCH"]}%</td>
                    <td>$5.4B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td className="at-deets">
                      <img src={window.ltc_logo} />
                      <span>Litecoin</span>
                      <h4>LTC</h4>
                    </td>
                    <td>{this.coin_price["LTC"]}</td>
                    <td style={{ color: this.coin_change["LTC"] > 0 ? "green" : "red" }}>{this.coin_change["LTC"]}%</td>
                    <td>$4.5B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td className="at-deets">
                      <img src={window.eos_logo} />
                      <span>EOS</span>
                      <h4>EOS</h4>
                    </td>
                    <td>{this.coin_price["EOS"]}</td>
                    <td style={{ color: this.coin_change["EOS"] > 0 ? "green" : "red" }}>{this.coin_change["EOS"]}%</td>
                    <td>$3.5B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td className="at-deets">
                      <img src={window.xlm_logo} />
                      <span>Stellar Lumens</span>
                      <h4>XLM</h4>
                    </td>
                    <td>{this.coin_price["XLM"]}</td>
                    <td style={{ color: this.coin_change["XLM"] > 0 ? "green" : "red" }}>{this.coin_change["XLM"]}%</td>
                    <td>$1.1B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td className="at-deets">
                      <img src={window.bat_logo} />
                      <span>Basic Attention Token</span>
                      <h4>BAT</h4>
                    </td>
                    <td>{this.coin_price["BAT"]}</td>
                    <td style={{ color: this.coin_change["BAT"] > 0 ? "green" : "red" }}>{this.coin_change["BAT"]}%</td>
                    <td>$228M</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td className="at-deets">
                      <img src={window.zrx_logo} />
                      <span>0x</span>
                      <h4>ZRX</h4>
                    </td>
                    <td>{this.coin_price["ZRX"]}</td>
                    <td style={{ color: this.coin_change["ZRX"] > 0 ? "green" : "red" }}>{this.coin_change["ZRX"]}%</td>
                    <td>$228M</td>
                    <td><button>Trade</button></td>
                  </tr>
                </tbody>
              </table>
            </div>       
          </div>
        </div>
      </div>
    )}
}

export default Price;