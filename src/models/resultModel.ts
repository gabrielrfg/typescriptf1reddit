import {IResult} from "../types/resultType";
import {model, Schema} from "mongoose";

const resultSchema: Schema = new Schema(
    {
        position: Number,
        driverSeason: {type: Schema.Types.ObjectId, ref:'DriverSeason'},
        fastestLap: Boolean,
        leaderGap: Number,
        penalties: Number,
        race: {type:Schema.Types.ObjectId, ref:'Race'}
    }
);

export default model<IResult>("Result", resultSchema);