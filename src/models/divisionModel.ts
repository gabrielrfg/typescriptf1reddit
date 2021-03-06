import {IDivision} from "../types/divisionType";
import {model, Schema} from "mongoose";

const divisionSchema: Schema = new Schema(
    {
        league: {type:Schema.Types.ObjectId, ref: 'League'},
        platform: String,
        number: Number,
        seasons: [{type:Schema.Types.ObjectId, ref: 'Season'}]
    }
);

export default model<IDivision>("Division", divisionSchema);