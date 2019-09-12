export const getPrices = () => (
  $.ajax({
    url: "https://api.coincap.io/v2/assets?limit=10",
    method: "GET"
  })
);

