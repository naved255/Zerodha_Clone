import mongoose from "mongoose";
import fundSchema from "../schema/fundSchema.js";

const fundModel = mongoose.model('fund', fundSchema);

export default fundModel;