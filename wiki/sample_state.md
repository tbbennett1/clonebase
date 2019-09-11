```js
{
  entities: {
    users: {
      1: {
        id: 1,
        email: 'someuser@email.com`,
        first_name: 'Bobby',
        last_name: 'Tables'
        }
    },
    coins: {
      1: {
        id: 1,
        symbol: 'BTC',
        name: 'Bitcoin',
        market_cap: 180000000000,
        description: 'Worlds first crypto'
      }
    },
    transactions: {
      1: {
        user_id: 1,
        symbol: 'BTC',
        purchase_date: 06/14/2017,
        purchase_amount: 2.3,
        purchase_price: 3002.45
      }
    },
    porfolio: {
      1: {
        coins: [{id: 1, 
                name: 'bitcoin', 
                symbol: 'BTC', 
                amount: 2.3}] 
      }
    },
    following: {
      1: {
        coins: [{id: 1, 
                name: 'bitcoin', 
                symbol: 'BTC'}]
      }
    }
  },
  session: {
    user_id: {5}
  },
  ui: {},
  errors: {
    login: ["Email or password is incorrect"],
  }
}
```