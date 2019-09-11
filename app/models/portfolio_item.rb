# == Schema Information
#
# Table name: portfolio_items
#
#  id         :bigint           not null, primary key
#  amount     :float
#  user_id    :integer          not null
#  coin_sym   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PortfolioItem < ApplicationRecord
  validates :coin_sym, :user_id, :amount, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  
end
