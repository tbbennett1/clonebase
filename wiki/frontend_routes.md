## Front-End Routes

* Root
  * App
    * NavBar
    * (main component goes here)
    * Footer

*The following routes, defined in App, will render components between NavBar and Footer.*

* /
  * Splash
* /signin
  * LoginForm
* /signup
  * SignupForm
* /price
  * CoinList
  * SearchBar
* /price/:coin_name
  * PriceGraph
  * AboutCoin
  * TopStories
  * PurchaseForm
* /dashboard
  * PorfolioGraph
  * FollowingIndex
  * PortfolioIndex
  * RecentActivity