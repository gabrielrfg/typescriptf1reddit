import {Document, Schema} from "mongoose";

export interface IResult extends Document{
    position: number,
    driverSeason: Schema.Types.ObjectId,
    fastestLap: boolean,
    leaderGap: number,
    penalties: number,
    race: Schema.Types.ObjectId
}