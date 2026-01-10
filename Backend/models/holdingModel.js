import { model } from "mongoose";
import { holdingSchema } from "../schema/holdingSchema.js";


export const holdingModel = model('holding', holdingSchema);
