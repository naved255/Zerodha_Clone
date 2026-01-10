import { Schema } from "mongoose";

const fundSchema = new Schema({

    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    },

    openingBalance:{
        type:Number,
        required:true
    },

    availableMargin:{
        type:Number,
        required:true
    },

    usedMargin:{
        type:Number,
        required:true
    }
    
});

export default fundSchema;