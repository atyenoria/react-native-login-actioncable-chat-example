require 'action_cable_client'

EventMachine.run do

  uri = "ws://localhost:4000/cable"
  client = ActionCableClient.new(uri, "RoomChannel")
  # the connected callback is required, as it triggers
  # the actual subscribing to the channel but it can just be
  # client.connected {}
  client.connected {  }

  # called whenever a message is received from the server
  client.received do | message |
    # puts message["message"]["message"]
    if message["message"]["message"] == "on"
      p "on"
      # `echo 1 > /sys/class/gpio/gpio2/value`
    end

    if message["message"]["message"] == "off"
      p "off"
      # `echo 0 > /sys/class/gpio/gpio2/value`
    end
      File.write("/Users/jima/webrtc/docker-janus/data/akb_new/rpi/hoge.txt", message["message"]["message"])
      client.perform('chat_test', { message: 'hello from amc' })
      p "a"
  end

  # adds to a queue that is purged upon receiving of
  # a ping from the server
  client.perform('chat_test', { message: 'hello from amc' })
end