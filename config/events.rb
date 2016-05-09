WebsocketRails::EventMap.describe do
  # You can use this file to map incoming events to controller actions.
  # One event can be mapped to any number of controller actions. The
  # actions will be executed in the order they were subscribed.
  #

  #
  # Here is an example of mapping namespaced events:
  #   namespace :product do
  #     subscribe :new, :to => ProductController, :with_method => :new_product
  #   end
  # The above will handle an event triggered on the client like `product.new`.
     subscribe :client_connected, :to => OnlineQuizzController, :with_method => :client_in
     subscribe :client_disconnected, :to => OnlineQuizzController, :with_method => :client_out
     subscribe :client_closed, :to => OnlineQuizzController, :with_method => :client_out
end
