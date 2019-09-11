# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
brock = User.create!( 
  email: "brock@clonebase.com",
  password: "password", 
  first_name: "Brock",
  last_name: "Bennett", 
  state: "California"
  );

portfolio = brock.portfolioItems

portfolio.each do |item|
  if item.coin_sym == "BTC"
    item.amount = 10
  elsif item.coin_sym == "ETH"
    item.amount = 25
  end
  item.save!
end

satosh = User.create!( 
  email: "yaboysatosh@bitcoin.com",
  password: "password", 
  first_name: "Satoshi",
  last_name: "Nakamoto", 
  state: "South Dakota"
  );


  