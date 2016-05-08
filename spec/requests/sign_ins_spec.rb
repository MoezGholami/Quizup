require 'rails_helper'
RSpec.describe "Signin", type: :request do

	def login_with(email, password)
		visit '/'
		expect(page).to have_http_status(200)
		page.find_by_id("sign_in_link").click
		expect(page).to have_http_status(200)
		fill_in "user[email]", :with => email
		fill_in "user[password]", :with => password
		page.find_by_id("submit").click
		expect(page).to have_http_status(200)
		have_current_path('/')
	end

  describe "tests signing in" do
    it "normally logins" do
			login_with("gholam@cafequiz.ir", "123456789")
			expect(page).to have_content(I18n.t('devise.sessions.signed_in'))
		end
		it "test login with invalid email" do
			login_with("incorrect_email@cafequiz.ir", "incorrect_password")
			expect(page).to have_content(I18n.t('devise.failure.not_found_in_database'))
		end
		it 'test login with valid email invalid password' do
			login_with("gholam@cafequiz.ir", "incorrect_password")
			expect(page).to have_content(I18n.t('devise.failure.invalid'))
		end
  end
end
