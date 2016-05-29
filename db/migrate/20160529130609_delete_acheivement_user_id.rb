class DeleteAcheivementUserId < ActiveRecord::Migration
  def change
    remove_column :acheivements, :user_id
  end
end
