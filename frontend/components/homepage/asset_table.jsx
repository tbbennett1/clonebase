import React from 'react';
import {formatter} from '../../util/price_api_util';

class AssetTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPrices();
  }

  render() {
    if (!this.props.prices) {
      return (
        <div className="loading">
        </div>
      )
    } else {
      let btc_price = formatter.format(parseFloat(this.props.prices[0].priceUsd));
      let eth_price = parseFloat(this.props.prices[1].priceUsd).toFixed(2);
      let xrp_price = parseFloat(this.props.prices[2].priceUsd).toFixed(2);
      let bch_price = parseFloat(this.props.prices[3].priceUsd).toFixed(2);
      let ltc_price = parseFloat(this.props.prices[4].priceUsd).toFixed(2);
      let btc_chng = parseFloat(this.props.prices[0].changePercent24Hr).toFixed(2);
      let eth_chng = parseFloat(this.props.prices[1].changePercent24Hr).toFixed(2);
      let xrp_chng = parseFloat(this.props.prices[2].changePercent24Hr).toFixed(2);
      let bch_chng = parseFloat(this.props.prices[3].changePercent24Hr).toFixed(2);
      let ltc_chng = parseFloat(this.props.prices[4].changePercent24Hr).toFixed(2);
    return (
      <div className="asset-table-wrap">
        <table className="asset-table">
          <thead className="at-head">
            <tr className="at-row">
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Chart</th>
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
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td className="at-deets">
                <img src={window.eth_logo} />
                <span>Ethereum</span>
                <h4>ETH</h4>
              </td>
              <td>${eth_price}</td>
              <td style={{ color: eth_chng > 0 ? "green" : "red" }}>{eth_chng}%</td>
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td className="at-deets">
                <img src={window.bch_logo} />
                <span>Bitcoin Cash</span>
                <h4>BCH</h4>
              </td>
              <td>${bch_price}</td>
              <td style={{ color: bch_chng > 0 ? "green" : "red" }}>{bch_chng}%</td>
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td className="at-deets">
                <img src={window.ltc_logo} />
                <span>Litecoin</span>
                <h4>LTC</h4>
              </td>
              <td>${ltc_price}</td>
              <td style={{ color: ltc_chng > 0 ? "green" : "red" }}>{ltc_chng}%</td>
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )}
  }
}

export default AssetTable;