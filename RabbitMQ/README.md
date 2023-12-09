# Project's Title
Project Name: task3 (RabbitMQ Event Processing)

# Project Description
RabbitMQ is a message broker: it accepts and forwards messages. You can think about it as a post office: when you put the mail that you want to post in a post box, you can be sure that the letter carrier will eventually deliver the mail to your recipient. In this analogy, RabbitMQ is a post box, a post office, and a letter carrier.

The major difference between RabbitMQ and the post office is that it doesn't deal with paper, instead, it accepts, stores, and forwards binary blobs of data ‒ messages.


# Table of Contents 
- Producing means nothing more than sending. A program that sends messages is a producer.

- Consuming has a similar meaning to receiving. A consumer is a program that mostly waits to receive messages.

# Development
- Sending
We'll call our message publisher (sender) send.js and our message consumer (receiver) subscriber.js. The publisher will connect to RabbitMQ, send a single message, and then exit.

- Receiving
That's it for our publisher. Our consumer listens for messages from RabbitMQ, so unlike the publisher which publishes a single message, we'll keep the consumer running to listen for messages and print them out.

## Development Environment Setup 
RabbitMQ Configuration
Install RabbitMQ:
Follow the installation instructions on the RabbitMQ download page.

Link: https://www.rabbitmq.com/download.html

Start RabbitMQ:
Start the RabbitMQ server using the rabbitMQ service start.

Access RabbitMQ Management Console:

Open a web browser and navigate to (http://localhost:15672/). Log in with the default credentials (guest/guest).
RabbitMQ is running before starting the event publisher and subscriber.

- Conclusion
The consumer will print the message it gets from the publisher via RabbitMQ. The consumer will keep running, waiting for messages

### Clone the Repository

```bash
git clone https://github.com/mohdfurkan01/RabbitMQ-Event_Processing
cd RabbitMQ
