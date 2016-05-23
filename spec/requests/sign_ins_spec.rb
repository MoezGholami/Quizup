require 'rails_helper'
RSpec.describe "Signin", type: :request do
  describe "tests signing in" do
    it "normally logins" do
			visit '/'
			expect(page).to have_http_status(200)
			user=build(:user)
			login_with(user.email, user.password)
			expect(page).to have_current_path('/')
			expect(page).to have_content(I18n.t('devise.sessions.signed_in'))
		end
		it "test login with invalid email" do
			visit '/'
			expect(page).to have_http_status(200)
			user=build(:user)
			login_with(user.email+"make_incorrect", user.password)
			expect(page).to have_current_path('/users/sign_in')
			expect(page).to have_content(I18n.t('devise.failure.not_found_in_database'))
		end
		it 'test login with valid email invalid password' do
			visit '/'
			expect(page).to have_http_status(200)
			user=build(:user)
			login_with(user.email, user.password+"make_incorrect")
			expect(page).to have_current_path('/users/sign_in')
			expect(page).to have_content(I18n.t('devise.failure.invalid'))
		end
		it 'should redirect to login page when we are not loged in, redirects to desired path after login' do
			visit '/categories'
			expect(page).to have_content(I18n.t('devise.failure.unauthenticated'))
			expect(page).to have_current_path('/users/sign_in')
			user = build(:user)
			login_with(user.email , user.password)
			expect(page).to have_current_path('/categories')
		end
  end
end
