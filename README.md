# [clonebase](http://clonebase.herokuapp.com)

* clonebase is a website where the crypto-curious can follow and trade cryptocurrencies. 
* It is 100% free and is meant for educational purposes.
* All frontend design is fully inspired by [coinbase](https://www.coinbase.com)


![Web Site System](wiki/clonebase_demo-min.gif)

## Technologies
* Rails
* React
* Redux

## Features
* Real-Time price data using [CoinCap Api](https://docs.coincap.io/?version=latest)
* Users can signup and instantly have access to a portfolio of assets
* Users can see the breakdown and total amount of their portfolios


## Code Sample
```js
  this.coin_price = {};
  this.coin_change = {}
  for (let i = 0; i < this.props.prices.length; i++) {
    this.coin_price[this.props.prices[i].symbol] = formatter.format(this.props.prices[i].priceUsd);
    this.coin_change[this.props.prices[i].symbol] = parseFloat((this.props.prices[i].changePercent24Hr)).toFixed(2);
  }
```
Once prices were fetched on the price page, I needed an easy way to access the price and 24hr change for each coin e.g. this.coin_price["BTC"] = current price of BTC pulled from CoinCap.io.

