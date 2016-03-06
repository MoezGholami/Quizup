class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :image
      t.string :questionTitle
      t.integer :answer
      t.string :choice1
      t.string :choice2
      t.string :choice3
      t.string :choice4

      t.timestamps null: false
    end
  end
end
