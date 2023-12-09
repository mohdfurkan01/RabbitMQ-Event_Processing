const amqp = require('amqplib');
const { rabbitMQUrl, exchange, routingKey } = require('../config/rabbitmq.config');

async function publishEvent(user) {
  try {
    const connection = await amqp.connect(rabbitMQUrl);
    
    
    const channel = await connection.createChannel();
    
    //console.log("for verifying", connection, channel)

    await channel.assertExchange(exchange, 'direct', { durable: false });
    channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(user)));

    console.log(`Event published: User registered - ${user.username}`);

    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error('Error publishing event:', error.message);
  }
}

// Example usage:
const user = { username: 'testingUser', email: 'user@example.com' };
publishEvent(user);