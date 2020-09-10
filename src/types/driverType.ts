import {Document, Schema} from "mongoose";

export interface IDriver extends Document{
    name: string,
    driverSeasons: Array<Schema.Types.ObjectId>,
}