import {ISeason} from "../types/seasonType";
import {model, Schema} from "mongoose";

const seasonSchema: Schema = new Schema(
    {
        number: Number,
        year: Number,
        division: {type: Schema.Types.ObjectId ,ref:'Division'},
        driversSeasons:[{type: Schema.Types.ObjectId, ref:'DriverSeason'}],
        races:[{type:Schema.Types.ObjectId, ref:'Race'}]
    }
);

export default model<ISeason>("Season", seasonSchema);