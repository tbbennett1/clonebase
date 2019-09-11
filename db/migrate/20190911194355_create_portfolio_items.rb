class CreatePortfolioItems < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolioItems do |t|
      t.float :amount
      t.integer :user_id, null: false
      t.string :coin_sym, null: false

      t.timestamps
    end
  end
end
