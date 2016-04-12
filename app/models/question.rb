class Question < ActiveRecord::Base
	belongs_to :categories
	validate :has_categories?

	def has_categories?
	  errors.add_to_base "Question must have at least one category." if self.category_id.blank?
	end
end

