class AddNameAndImageToCategory < ActiveRecord::Migration
  def change
  	add_column :categories, :name, :string
  	add_column :categories, :image, :string
  end
end
