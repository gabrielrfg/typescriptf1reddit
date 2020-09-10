import { Response, Request } from "express"
import { ISeason } from "../types/seasonType"
import Season from "../models/seasonModel"
import { IDivision } from "../types/divisionType"
import Division from "../models/divisionModel"
import {IDriverSeason} from "../types/driverSeasonType"
import DriverSeason from "../models/driverSeasonModel"

const getDriverSeasons = async (req:Request, res:Response): Promise<void> => {
    try{
        const driverSeasons: IDriverSeason[] = await DriverSeason.find()
        res.status(200).json({driverSeasons})     
    }catch(error){
        res.status(500).json({message: "Error getting driverSeasons"})
    }
}

const addDriverSeason = async (req:Request, res:Response):Promise<void> => {
    try {
        const body = req.body as Pick<IDriverSeason,"driver"|
        "fastestLaps"|"points"|"season"|"results">

        const driverSeason : IDriverSeason = new DriverSeason({
            driver: body.driver,
            fastestLaps: body.fastestLaps,
            points: body.points,
            season: body.season,
            results: body.results
        })
        const newDriverSeason: IDriverSeason = await driverSeason.save()
        const allDriverSeasons: IDriverSeason[] = await DriverSeason.find()

        res.status(201).json({
            message:"Added DriverSeason",
            driverSeason: newDriverSeason,
            allDriverSeasons: allDriverSeasons
        })
    } catch (error) {
        res.status(500).json({message: "Error adding driverSeason"})
    }
}
export { getDriverSeasons, addDriverSeason}