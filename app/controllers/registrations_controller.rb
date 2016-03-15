class RegistrationsController < Devise::RegistrationsController  
  respond_to :json

  private

  def sign_up_params
    params.require(:user).permit(:firs_name, :last_name, :email, :password, :password_confirmation, :sex, :country)
  end

  def account_update_params
    params.require(:user).permit(:firs_name, :last_name, :email, :password, :password_confirmation, :current_password, :sex, :country)
  end
end