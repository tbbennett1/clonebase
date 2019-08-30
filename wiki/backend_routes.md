## HTML
* GET / StaticPagesController#root
## API Endpoints
### users
* POST /api/users - signup
### session
* POST /api/session - login
* DELETE /api/session - logout
### transactions
* GET /api/transactions - returns user's transactions
* GET /api/transactions/:id - returns single transaction
* POST /api/transactions - creates a new transaction
### coins
* GET /api/coins - returns all coins
* GET /api/coins/:id - returns single coin
* POST /api/coins - adds a coin to database
### portfolio_coins
* GET /api/portfolio_coins - returns all portfolio coins for loggedIn user
* GET /api/portfolio_coins/:id - returns single portfolio coin
* POST /api/portfolio_coins - adds coin to a portfolio
* PATCH /api/portfolio_coins/:id - edits a portfolio coin
* DELETE /api/portfolio_coins/:id - removes a portfolio coin
### following_coins
* GET /api/following - returns all followed coins for loggedIn user
* GET /api/following/:id - returns single followed coin
* POST /api/following - adds coin to followed
* DELETE /api/following/:id - removes a portfolio coin