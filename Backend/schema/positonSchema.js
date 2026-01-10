import { Schema } from "mongoose";

const positionSchema = new Schema({
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },

    name: {          
        type: String,
        required: true
    },

    product: {             
        type: String,
        enum: ["MIS", "NRML"],
        required: true
    },

    qty: {
        type: Number,
        required: true
    },

    buyPrice: {            
        type: Number,
        required: true
    },

    sellPrice: {    
        type: Number,
        default: null
    },

    status: {
        type: String,
        enum: ["OPEN", "CLOSED"],
        default: "OPEN"
    }
}, { timestamps: true });


export { positionSchema };