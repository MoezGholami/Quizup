class CreateQ2cats < ActiveRecord::Migration
  def change
    create_table :q2cats do |t|
      t.integer :question_id
      t.integer :category_id

      t.timestamps null: false
    end
  end
end
