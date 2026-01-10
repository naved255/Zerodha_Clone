import { model } from "mongoose";
import { orderSchema } from "../schema/orderSchema.js";

export const orderModel = model('order', orderSchema);