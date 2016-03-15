class SessionsController < Devise::SessionsController  
    respond_to :json
    skip_before_filter :verify_signed_out_user

  def create
    # Fetch params
    email = params[:session][:email] if params[:session]
    password = params[:session][:password] if params[:session]
 	
    id = User.find_by(email: email).try(:id) if email.presence
    puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
 	puts "#{request.format}"
    # Validations
    
 	if request.format == :json 
	    if email.nil? or password.nil?
	      render status: 400, json: { success: false, message: 'The request MUST contain the user email and password.', data: {} }
	      return
	    end
	 
	    # Authentication
	    user = User.find_by(email: email)
	  
	    if user
	      if user.valid_password? password
	        user.reset_authentication_token!
	        # Note that the data which should be returned depends heavily of the API client needs.
	        
	        sign_in user
	        
	        render status: 200, json: { success: true, message: 'Successfully logged in', 
	        							data: {email: user.email, authentication_token: user.authentication_token, id: id } }
	      else
	        render status: 401, json: { success: false, message: 'Invalid email or password.', data: {} }
	      end
	    else
	      render status: 401, json: { success: false, message: 'Invalid email or password.', data: {} }
	    end
	else
		super
	end
  end
 
  def destroy
    # Fetch params
    if request.format == :json
	    user = User.find_by(authentication_token: params[:user_token])
	    if user.nil?
	      render status: 404, json: { message: 'Invalid token.' }
	    else
	      user.authentication_token = nil
	      user.save!
	      sign_out user
	      render status: 204, json: nil
	    end
	else
		super
	end
  end
  
end