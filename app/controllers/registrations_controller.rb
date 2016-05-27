class RegistrationsController < Devise::RegistrationsController  
  respond_to :json
  prepend_before_action :check_captcha, only: [:create]

  def after_inactive_sign_up_path_for(resource_or_scope)
    session["user_return_to"] || root_path
  end

  def create
    super
    user = User.find_by_email(params[:user][:email])
    user.score = 0
    user.save
  end
  
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