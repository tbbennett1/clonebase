class PortfolioItem < ApplicationRecord
  validates :coin_sym, :user_id, :amount, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  
end
