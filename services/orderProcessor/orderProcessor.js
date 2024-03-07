import { Order, orderStatus } from "../../models/Order.js";
import { OrderTopic, kafka } from "../kafkaClient/index.js";

import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/async-orders');

export const orderProcessor = async () => {
    const consumer = kafka.consumer({
        groupId: 'order-processor'
    })
    console.log("consumer connecting..........")
    await consumer.connect()
    await consumer.subscribe({ topic: OrderTopic, fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            /**
             * Skipping inventory check, for the sake of simplicity. I am setting all orders as pending
             */
            console.log("partition = ", partition, "  Topic = ", topic)
            const orderId = JSON.parse(message.value.toString()).orderId
            console.log(`${orderId} starting`)
            const order = await Order.findOne({ orderId: orderId })
            if (order !== null) {
                order.orderStatus = orderStatus[1]
                await order.save()
                console.log(`${orderId} done`)
                return
            }
            console.log("order is null")
        }
    })
}

orderProcessor()


