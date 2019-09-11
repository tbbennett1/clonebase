class ChangePortfolioItemsToPortfolioItems < ActiveRecord::Migration[5.2]
  def change
    rename_table :portfolioItems, :portfolio_items
  end
end
