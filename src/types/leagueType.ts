import {Document, Schema} from "mongoose";

export interface ILeague extends Document{
    name: string,
    divisions: Array<Schema.Types.ObjectId>
}