import React from 'react';

class Portfolio extends React.Component {
  render() {
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
                    <p>50%</p>
                  </div>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <img src={window.eth_logo}/>
                  <h4>Ethereum</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-eth"></div>
                    <p>25%</p>
                  </div>
                </td>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <img src={window.ltc_logo}/>
                  <h4>Litecoin</h4>
                </td>
                <td>
                  <div className="percentage">
                    <div className="percent-bar-ltc"></div>
                    <p>5%</p>
                  </div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="balance">

          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;