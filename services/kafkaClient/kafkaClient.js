import { Kafka } from 'kafkajs';
// const uuid = require('uuid');

// Kafka client configuration
export const kafka = new Kafka({
    clientId: "async-orders",
    brokers: ['localhost:9092']
});