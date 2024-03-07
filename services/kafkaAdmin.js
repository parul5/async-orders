import { OrderTopic, partitionCount, kafka } from './kafkaClient/index.js';


async function init() {
    const admin = kafka.admin();
    console.log("admin connecting..")
    await admin.connect();
    console.log("admin connection succesful")
    await admin.createTopics({
        topics: [{
            topic: OrderTopic,
            numPartitions: partitionCount
        }]
    })
    console.log("Topic created")
    await admin.disconnect();
    console.log("Admin disconnected")
}

init()

