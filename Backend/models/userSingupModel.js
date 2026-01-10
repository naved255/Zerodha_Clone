import mongoose from "mongoose";
import userSingupSchema from "../schema/userSingupSchema.js";

const userSingupModel = mongoose.model('user',userSingupSchema);

export default userSingupModel;