import React from 'react';

class RecentActivity extends React.Component {
  render() {
    return (
      <div className="ra-container">
        <div className="ra-header">
          <h2>Recent Activity</h2>
        </div>
        <div className="ra-data">
          <table className="ra-data-table">
            <tbody>
              <tr>
                <td>
                  <div className="ra-date">
                    <span>SEP</span>
                    <span>03</span>
                  </div>
                </td>
                <td>
                  <img src={window.bat_logo} className="ra-img"/>
                </td>
                <td>
                  <div className="ra-type">
                    <span>Withdrew Funds</span>
                    <p>To Bank Account *****03</p>
                  </div>
                </td>
                <td>
                  <div className="ra-usd-value">
                    <span>-$1,000</span>
                    <p>-$1,000</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="ra-date">
                    <span>SEP</span>
                    <span>03</span>
                  </div>
                </td>
                <td>
                  <img src={window.btc_logo} className="ra-img"/>
                </td>
                <td>
                  <div className="ra-type">
                    <span>Withdrew Funds</span>
                    <p>To Bank Account *****03</p>
                  </div>
                </td>
                <td>
                  <div className="ra-usd-value">
                    <span>-$12,000</span>
                    <p>-$12,000</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="ra-date">
                    <span>SEP</span>
                    <span>03</span>
                  </div>
                </td>
                <td>
                  <img src={window.eth_logo} className="ra-img"/>
                </td>
                <td>
                  <div className="ra-type">
                    <span>Bought Ethereum</span>
                    <p>Using USD Wallet</p>
                  </div>
                </td>
                <td>
                  <div className="ra-usd-value">
                    <span>+$19,000</span>
                    <p>+$19,000</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="ra-date">
                    <span>SEP</span>
                    <span>02</span>
                  </div>
                </td>
                <td>
                  <img src={window.bat_logo} className="ra-img"/>
                </td>
                <td>
                  <div className="ra-type">
                    <span>Withdrew Funds</span>
                    <p>To Bank Account *****03</p>
                  </div>
                </td>
                <td>
                  <div className="ra-usd-value">
                    <span>-$1,000</span>
                    <p>-$1,000</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="ra-date">
                    <span>AUG</span>
                    <span>11</span>
                  </div>
                </td>
                <td>
                  <img src={window.bat_logo} className="ra-img"/>
                </td>
                <td>
                  <div className="ra-type">
                    <span>Bought Basic Attention Token</span>
                    <p>Using USD Wallet</p>
                  </div>
                </td>
                <td>
                  <div className="ra-usd-value">
                    <span>+$1,000</span>
                    <p>+$1,000</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="balance">
            <span>View your accounts ></span>
          </div>
        </div>
      </div>
    )
  }
}

export default RecentActivity;