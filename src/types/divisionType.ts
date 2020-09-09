import {Document, Schema} from "mongoose";

export interface IDivision extends Document{
    league: Schema.Types.ObjectId,
    platform: string,
    number: number
}