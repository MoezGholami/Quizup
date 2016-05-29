require 'faye'

Faye::WebSocket.load_adapter('puma')
socket_server=Faye::RackAdapter.new(:mount => '/faye', :timeout => 25, :ping => 50)
run socket_server

