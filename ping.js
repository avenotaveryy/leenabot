});
  // Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'l!ping') {
      // Send "pong" to the same channel
      message.channel.send('hey boo!');
    }
