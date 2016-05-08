class CreateUserRanks < ActiveRecord::Migration
  def change
    create_table :user_ranks do |t|
      t.references :user
      t.references :category
      t.integer "score"
      t.timestamps null: false
    end
    add_index :user_ranks,['user_id','category_id']
  end
end
