class UserAcheivement < ActiveRecord::Base
  belongs_to :user
  belongs_to :acheivement
end
