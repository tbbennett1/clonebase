import React from 'react';

class AssetTable extends React.Component {
  render() {
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
              <td>$10,634</td>
              <td>- 0.2%</td>
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
              <td>$176</td>
              <td>- 0.5%</td>
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
              <td>$296</td>
              <td>- 1.79%</td>
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
              <td>$67</td>
              <td>- 2.82%</td>
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default AssetTable;