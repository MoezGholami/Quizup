class CreateUserAcheivements < ActiveRecord::Migration
  def change
    create_table :user_acheivements do |t|
      t.integer :user_id
      t.integer :acheivement_id

      t.timestamps null: false
    end
  end
end
