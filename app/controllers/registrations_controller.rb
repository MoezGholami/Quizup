class RegistrationsController < Devise::RegistrationsController  
  respond_to :json
  prepend_before_action :check_captcha, only: [:create]
  private

	def check_captcha
    if verify_recaptcha
      true
    else
      self.resource = resource_class.new sign_up_params
      respond_with_navigational(resource) { render :new }
    end 
  end

  def sign_up_params
    params.require(:user).permit(:firs_name, :last_name, :email, :password, :password_confirmation, :sex, :country)
  end

  def account_update_params
    params.require(:user).permit(:firs_name, :last_name, :email, :password, :password_confirmation, :current_password, :sex, :country)
  end
end