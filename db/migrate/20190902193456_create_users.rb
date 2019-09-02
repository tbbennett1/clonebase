class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :state
      t.date :dob
      t.string :address
      t.string :country
      t.string :password_digest, null: false
      t.string :session_token

      t.timestamps
    end
  end
end
