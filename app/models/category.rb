class Category < ActiveRecord::Base
	has_many :q2cats
	has_many :questions, through: :q2cats
end
