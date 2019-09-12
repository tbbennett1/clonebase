export const getPrices = () => (
  $.ajax({
    url: "https://api.coincap.io/v2/assets?limit=15",
    method: "GET"
  })
);

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

