# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  state           :string
#  dob             :date
#  address         :string
#  country         :string
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
 attr_reader :password

  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :generate_portfolio

  has_many :portfolioItems,
  foreign_key: :user_id,
  class_name: :PortfolioItem

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    # Set temporary instance variable so that we can validate length
    @password = password
    # Create a password_digest so that we do not have to store the plain-text password in our DB
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    # Use BCrypt's built-in method for checking if the password provided is the user's password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    # Generate the initial session_token so that we pass the validation
    # This method runs right after the model is initialized, before any validations are run
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    # When a user logs out, we want to scramble their session_token so that bad people cannot use the old one
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def generate_portfolio
    btc = PortfolioItem.new(coin_sym: 'BTC', user_id: self.id, amount: 10)
    eth = PortfolioItem.new(coin_sym: 'ETH', user_id: self.id, amount: 15)
    ltc = PortfolioItem.new(coin_sym: 'LTC', user_id: self.id, amount: 35)
    bat = PortfolioItem.new(coin_sym: 'BAT', user_id: self.id, amount: 1200)

    btc.save!
    eth.save!
    ltc.save!
    bat.save!
  end
end
