import { Schema } from "mongoose";

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    product: {
        type: String,
        enum: ['CNC', 'MIS', 'NRML'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    mode: {
        type: String,
        enum: ['BUY', 'SELL'],
        required: true
    },

    status: {
        type: String,
        enum: ['OPEN', 'EXECUTED', 'CANCELLED'],
        default: 'EXECUTED'
    }

}, { timestamps: true });

export { orderSchema };