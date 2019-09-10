import React from 'react';
import Heading from '../homepage/heading';
import {fetchPrices} from '../../actions/price_actions';


class Price extends React.Component{
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     prices: {}
  //   }
  // }

  componentDidMount() {
    debugger
    this.props.fetchPrices();
    // fetchPrices();
  }

  render () {
    return(
      <div className="price-index">
        <Heading />
        <section>
          test
        </section>
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
                    <td>Bitcoin</td>
                    <td>$10,634</td>
                    <td>- 0.2%</td>
                    <td>$189B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ethereum</td>
                    <td>$176</td>
                    <td>- 0.5%</td>
                    <td>$18.5B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>XRP</td>
                    <td>$0.25</td>
                    <td>- 1.79%</td>
                    <td>$11B</td>
                    <td><button>Trade</button></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Litecoin</td>
                    <td>$67</td>
                    <td>- 2.82%</td>
                    <td>~~~~~</td>
                    <td><button>Trade</button></td>
                  </tr>
                </tbody>
              </table>
            </div>       
          </div>
        </div>
      </div>
    )
  }
}

export default Price;