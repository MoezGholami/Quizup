class RegistrationsController < Devise::RegistrationsController  
    respond_to :json

  def new
    # Fetch params
    
    # id = User.find_by(email: email).try(:id) if email.presence
    # puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
   	puts "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    # Validations
    if request.format == :json      
      email = params[:email]
      password = params[:password]
      user = User.find_by(email: email)
      if user
        render status: 200, json: { success: false, message: 'The email is already used', 
                        data: {email: user.email}}
        return
      end
      puts "#{params[:email]}   #{password} data mahyar"
      if email.nil? or password.nil?
        render status: 400, json: { message: 'The request MUST contain the user email and password.' }
        return
      end
   
      # Authentication
      user = User.new
      user.email = email
      user.password = password
      user.reset_authentication_token!
          # Note that the data which should be returned depends heavily of the API client needs.
          
          sign_in user
   
      #     # Note that the data which should be returned depends heavily of the API client needs.
      render status: 200, json: { success: true, alert: 'Successfully logged in', 
                        data: {email: user.email, authentication_token: user.authentication_token, id: user.id} }
    else
      super
    end
  end

end