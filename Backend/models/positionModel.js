import { model } from "mongoose";
import { positionSchema } from "../schema/positonSchema.js";

export const positionModel = model("position", positionSchema);