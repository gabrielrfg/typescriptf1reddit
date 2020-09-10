import {IRace} from "../types/raceType";
import {model, Schema} from "mongoose";

const raceSchema: Schema = new Schema(
    {
        season: {type: Schema.Types.ObjectId, ref:'Season'},
        date: Schema.Types.Date,
        results:[{type: Schema.Types.ObjectId, ref:'Result'}]
    }
);
export default model<IRace>("Race", raceSchema);