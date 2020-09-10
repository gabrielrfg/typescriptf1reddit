import {Document, Schema} from "mongoose";

export interface ISeason extends Document{
    number: number,
    year: number,
    division: Schema.Types.ObjectId,
    driversSeasons: Array<Schema.Types.ObjectId>,
    races: Array<Schema.Types.ObjectId>,
}