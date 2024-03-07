import { kafka } from '../kafkaClient/kafkaClient.js'

import { OrderTopic } from '../kafkaClient/index.js'

export const sendOrder = async (orders) => {
    const producer = kafka.producer()
    await producer.connect()
    await producer.send({
        topic: OrderTopic,
        messages: [
            {
                value: JSON.stringify(orders)
            }
        ],
    })
    console.log("message sent")
    await producer.disconnect()
}
