FactoryGirl.define do
	factory :user do
		firs_name 'غلام'
		last_name 'غلامی'
		email 'gholam@cafequiz.ir'
		sex 'مذکر'
		country 'ایران'
		password '123456789'
		password_confirmation '123456789'
	end

	factory :gholam, class: User do
		firs_name 'غلام'
		last_name 'غلامی'
		email 'gholam@cafequiz.ir'
		sex 'مذکر'
		country 'ایران'
		password '123456789'
		password_confirmation '123456789'
	end

	factory :gholi, class: User do
		firs_name 'قلی'
		last_name 'قلوایی'
		email 'gholi@cafequiz.ir'
		sex 'مذکر'
		country 'ایران'
		password '123456789'
		password_confirmation '123456789'
	end
end