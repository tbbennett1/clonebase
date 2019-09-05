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
              <td>Bitcoin</td>
              <td>$10,634</td>
              <td>- 0.2%</td>
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ethereum</td>
              <td>$176</td>
              <td>- 0.5%</td>
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bitcoin Cash</td>
              <td>$296</td>
              <td>- 1.79%</td>
              <td>~~~~~</td>
              <td><button>Buy</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Litecoin</td>
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