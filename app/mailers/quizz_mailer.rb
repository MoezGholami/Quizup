class QuizzMailer < Devise::Mailer 
	helper :application # gives access to all helpers defined within `application_helper`.
	include Devise::Controllers::UrlHelpers # Optional. eg. `confirmation_url`
	default template_path: 'devise/mailer'
	default from: "noreply@cafequize.ir"
	def offline_quizz_announce_email(user, quizz_url)
    @user = user
    @quizz_url = quizz_url
    mail(to: @user.email, subject: 'شما برای یک مسابقه انتخاب شده اید')
  end

  def offline_quizz_result_email(user, result_url)
  	@user =user
  	@result_url = result_url
  	mail(to: @user.email, subject: 'نتیجه ی مسابقه')
  end
end
