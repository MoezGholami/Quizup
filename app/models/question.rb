class Question < ActiveRecord::Base
	has_many :q2cats
	has_many :categories, through: :q2cats
	validate :has_categories?

	def has_categories?
	  errors.add_to_base "Question must have at least one category." if self.categories.blank?
	end
end

