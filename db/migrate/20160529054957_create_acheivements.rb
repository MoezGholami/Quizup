class CreateAcheivements < ActiveRecord::Migration
  def change
    create_table :acheivements do |t|
      t.string :name
      t.string :dec
      t.string :image

      t.timestamps null: false
    end
  end
end
