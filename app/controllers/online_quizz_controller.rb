class OnlineQuizzController < WebsocketRails::BaseController
  def client_in
    if current_user != nil
      current_user.is_online= true
      current_user.save!
    end
  end

  def client_out
    if current_user != nil
      current_user.is_online = false
      current_user.is_busy= false
      current_user.save!
    end
  end
end
