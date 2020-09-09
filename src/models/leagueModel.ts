import {ILeague} from "../types/leagueType";
import {model, Schema} from "mongoose";

const leagueSchema: Schema = new Schema(
    {
        name: {type: String, unique: true},
        divisions: [{type: Schema.Types.ObjectId, ref:'Division'}]
    }
);

export default model<ILeague>("League", leagueSchema);