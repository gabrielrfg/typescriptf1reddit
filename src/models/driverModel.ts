import {IDriver} from "../types/driverType";
import {model, Schema} from "mongoose";

const driverSchema: Schema = new Schema(
    {
        name: String,
        driverSeasons: [{type: Schema.Types.ObjectId, ref:'DriverSeason'}]
    }
);

export default model<IDriver>("Driver", driverSchema);