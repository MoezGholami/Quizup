class AddUserIdToAcheivement < ActiveRecord::Migration
  def change
    add_column :acheivements, :user_id, :integer

  end
end
