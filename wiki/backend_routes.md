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
### portfolio
* GET /api/portfolio - returns all portfolio coins for loggedIn user
* GET /api/portfolio/:id/coins - returns single portfolio coin
* POST /api/portfolio - adds coin to a portfolio
* PATCH /api/portfolio/:id - edits a portfolio coin
* DELETE /api/portfolio/:id - removes a portfolio coin
### following
* GET /api/following - returns all coins loggedIn user is following