export const getPrices = () => (
  $.ajax({
    url: "https://api.coincap.io/v2/assets",
    method: "GET",
    limit: 5
  })
)

