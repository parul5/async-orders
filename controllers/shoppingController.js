import { Order } from "../models/Order.js";
import { sendOrder } from "../services/order/orderProducer.js"
import { orderStatus } from "../models/Order.js";

export const CreateOrder = async (req, res, next) => {

    // Example order structure
    // Skipping the validation of product price, calculation of total amount etc. for the sake of simplicity
    const orderStruct = {
        orderId: (Math.floor(Math.random() * 10000000)).toString(),
        orderStatus: orderStatus[0],
        customerEmail: 'test@test.com',
        products: [
            {
                productId: 12,
                quantity: 2,
                price: 1000
            }
        ],
        totalAmount: 2000
    }

    const currentOrder = await Order.create(orderStruct)
    console.log("currentOrder = ", currentOrder)
    await sendOrder(orderStruct)

    res.json({ message: "order added to queue" })
}