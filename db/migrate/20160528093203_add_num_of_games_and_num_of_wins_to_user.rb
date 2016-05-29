class AddNumOfGamesAndNumOfWinsToUser < ActiveRecord::Migration
  def change
  	add_column :users, :num_of_games, :integer, :default => 0
  	add_column :users, :num_of_wins, :integer, :default => 0
  end
end
