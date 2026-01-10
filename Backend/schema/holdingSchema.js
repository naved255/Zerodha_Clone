import { Schema } from "mongoose";

const holdingSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
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

        avg: {             
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

export { holdingSchema };