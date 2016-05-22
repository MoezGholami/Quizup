class UsersController < ApplicationController
	def show_profile
		@user = current_user
		respond_to do |format|
	        format.html { render "users/profile", notice: "" }
	    end
	end
end