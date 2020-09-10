import { Response, Request } from "express"
import { ISeason } from "../types/seasonType"
import Season from "../models/seasonModel"
import { IDivision } from "../types/divisionType"
import Division from "../models/divisionModel"
import {IDriverSeason} from "../types/driverSeasonType"
import DriverSeason from "../models/driverSeasonModel"
import {IRace} from "../types/raceType"
import Race from "../models/raceModel"

const getRaces = async (req:Request, res:Response): Promise<void> => {
    try{
        const races: IRace[] = await Race.find()
        res.status(200).json({races})     
    }catch(error){
        res.status(500).json({message: "Error getting races"})
    }
}

const addRace = async (req:Request, res:Response):Promise<void> => {
    try {
        const body = req.body as Pick<IRace,"season"|"date"|"results">

        const race : IRace = new Race({
            season: body.season,
            date: body.date,
            results: body.results
        })
        const newRace: IRace = await race.save()
        const allRaces: IRace[] = await Race.find()

        const season : ISeason | null = await Season.findById(race.season)
        if(!season){
            throw 'Season not found'
        }
        season.races.push(race.id)
        season.save()

        res.status(201).json({
            message:"Added Race",
            newRace: newRace,
            allRaces: allRaces
        })
    } catch (error) {
        res.status(500).json({message: "Error adding race"})
    }
}
export { getRaces, addRace}