import mongoose, { Schema } from "mongoose";

export const orderStatus = Object.freeze(["received", "pending", "rejected", "shipped", "delivered"]);

const orderSchema = new Schema({
    orderId: { type: Number, required: true },
    orderStatus: { type: String, required: true },
    customerEmail: { type: String },
    products: [
        {
            productId: { type: Number },
            quantity: { type: Number },
            price: { type: Number }
        }
    ],
    totalAmount: { type: Number }
})

const Order = mongoose.model('order', orderSchema)
export { Order }