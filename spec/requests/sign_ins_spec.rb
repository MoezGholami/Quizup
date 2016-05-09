require 'rails_helper'

RSpec.describe "Signin", type: :request do
  describe "tests signing in" do
    it "normally logins" do
			user=build(:user)
			login_with(user.email, user.password)
			expect(page).to have_content(I18n.t('devise.sessions.signed_in'))
		end
		it "test login with invalid email" do
			user=build(:user)
			login_with(user.email+"make_incorrect", user.password)
			expect(page).to have_content(I18n.t('devise.failure.not_found_in_database'))
		end
		it 'test login with valid email invalid password' do
			user=build(:user)
			login_with(user.email, user.password+"make_incorrect")
			expect(page).to have_content(I18n.t('devise.failure.invalid'))
		end
  end
end
