import {Document, Schema} from "mongoose";

export interface IRace extends Document{
    season: Schema.Types.ObjectId,
    date: Schema.Types.Date,
    results: Array<Schema.Types.ObjectId>,
}