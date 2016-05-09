class AddIsOnlineIsBusy < ActiveRecord::Migration
  def change
    add_column :users, :is_online, :boolean, :default => false
    add_column :users, :is_busy, :boolean, :default => false
  end
end
