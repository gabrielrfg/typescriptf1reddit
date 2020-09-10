import {IDriverSeason} from "../types/driverSeasonType";
import {model, Schema} from "mongoose";

const driverSeasonSchema: Schema = new Schema(
    {
        driver: {type:Schema.Types.ObjectId, ref:'Driver'},
        fastestLaps: Number,
        points: Number,
        season: {type:Schema.Types.ObjectId, ref:'Season'},
        results: [{type:Schema.Types.ObjectId, ref:'Result'}]
    }
);

export default model<IDriverSeason>("DriverSeason", driverSeasonSchema);