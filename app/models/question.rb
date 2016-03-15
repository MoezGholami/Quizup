class Question < ActiveRecord::Base
	has_many :categories
	validate :has_categories?

	def has_categories?
	  errors.add_to_base "Question must have at least one category." if self.categories.blank?
	end
end

