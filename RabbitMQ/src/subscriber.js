
const amqp = require('amqplib');
const winston = require('winston');

const {rabbitMQUrl, exchange, queue, routingKey } = require('../config/rabbitmq.config')


const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: './logs/events.log' }),
    
    
  ],
});

async function subscribeToEvents() {
  try {
    //connect rabbitmq
    const connection = await amqp.connect(rabbitMQUrl);
    const channel = await connection.createChannel();

    await channel.assertExchange(exchange, 'direct', { durable: false });
    const assertedQueue = await channel.assertQueue(queue, { durable: true });

    channel.bindQueue(assertedQueue.queue, exchange, routingKey);

    channel.consume(assertedQueue.queue, (msg) => {
      const user = JSON.parse(msg.content.toString());
      logger.info(`User registered: ${user.username}, Email: ${user.email}`);
    }, { noAck: true });

    console.log('Event subscriber is listening...');
  } catch (error) {
    console.error('Error subscribing to events:', error.message);
  }
}

// Example usage:
subscribeToEvents();
