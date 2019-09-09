export const getPrices = () => (
  $.ajax({
  "url": "api.coincap.io/v2/assets",
  "method": "GET",
  "timeout": 0,
  "limit": 5
  })
)

