import {Document, Schema} from "mongoose";

export interface IDriverSeason extends Document{
    driver: Schema.Types.ObjectId,
    fastestLaps: number,
    points: number,
    season: Schema.Types.ObjectId,
    results: Array<Schema.Types.ObjectId>
}