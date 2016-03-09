class AddProfileToUser < ActiveRecord::Migration
  def change
  	add_column :users, :firs_name, :string
  	add_column :users, :last_name, :string
  	add_column :users, :sex, :string
  	add_column :users, :country, :string
  end
end
