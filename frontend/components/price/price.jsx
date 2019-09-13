import React from 'react';
import Heading from '../homepage/heading';
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
    }else {
      let btc_price = formatter.format(this.props.prices[0].priceUsd);
      let eth_price = formatter.format(this.props.prices[1].priceUsd);
      let xrp_price = formatter.format(this.props.prices[2].priceUsd);
      let bch_price = formatter.format(this.props.prices[3].priceUsd);
      let ltc_price = formatter.format(this.props.prices[4].priceUsd);
      let btc_chng = parseFloat(this.props.prices[0].changePercent24Hr).toFixed(2);
      let eth_chng = parseFloat(this.props.prices[1].changePercent24Hr).toFixed(2);
      let xrp_chng = parseFloat(this.props.prices[2].changePercent24Hr).toFixed(2);
      let bch_chng = parseFloat(this.props.prices[3].changePercent24Hr).toFixed(2);
      let ltc_chng = parseFloat(this.props.prices[4].changePercent24Hr).toFixed(2);
    return(
      <div className="price-index">
        <Heading />
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
                    <td>1</td>
                    <td className="at-deets">
                      <img src={window.btc_logo} />
                      <span>Bitcoin</span>
                      <h4>BTC</h4>
                    </td>
                    <td>{btc_price}</td>
                    <td style={{ color: btc_chng > 0 ? "green" : "red" }}>{btc_chng}%</td>
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
                    <td>{eth_price}</td>
                    <td style={{ color: eth_chng > 0 ? "green" : "red" }}>{eth_chng}%</td>
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
                    <td>{xrp_price}</td>
                    <td style={{ color: xrp_chng > 0 ? "green" : "red" }}>{xrp_chng}%</td>
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
                    <td>{bch_price}</td>
                    <td style={{color: bch_chng > 0 ? "green" : "red" }}>{bch_chng}%</td>
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
                    <td>{ltc_price}</td>
                    <td style={{ color: ltc_chng > 0 ? "green" : "red" }}>{ltc_chng}%</td>
                    <td>$4.5B</td>
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
}

export default Price;