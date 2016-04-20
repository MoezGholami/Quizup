class Category < ActiveRecord::Base
	has_many :questions
	has_many :user_ranks
end
