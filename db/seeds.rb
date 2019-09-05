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

satosh = User.create!( 
  email: "yaboysatosh@bitcoin.com",
  password: "password", 
  first_name: "Satoshi",
  last_name: "Nakamoto", 
  state: "South Dakota"
  );
  