import React from 'react';
import Heading from '../homepage/heading';

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
        <div>
          Loading...
        </div>
      )
    }else {
      debugger
      let btc_price = parseFloat(this.props.prices[0].priceUsd).toFixed(2);
      let eth_price = parseFloat(this.props.prices[1].priceUsd).toFixed(2);
      let xrp_price = parseFloat(this.props.prices[2].priceUsd).toFixed(2);
      let ltc_price = parseFloat(this.props.prices[4].priceUsd).toFixed(2);
      let btc_chng = parseFloat(this.props.prices[0].changePercent24Hr).toFixed(2);
      let eth_chng = parseFloat(this.props.prices[1].changePercent24Hr).toFixed(2);
      let xrp_chng = parseFloat(this.props.prices[2].changePercent24Hr).toFixed(2);
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
                    <td>${btc_price}</td>
                    <td>{btc_chng}%</td>
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
                    <td>${eth_price}</td>
                    <td>{eth_chng}%</td>
                    <td>$18.5B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>XRP</td>
                    <td>${xrp_price}</td>
                    <td>{xrp_chng}%</td>
                    <td>$11B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Litecoin</td>
                    <td>${ltc_price}</td>
                    <td>{ltc_chng}%</td>
                    <td>~~~~~</td>
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