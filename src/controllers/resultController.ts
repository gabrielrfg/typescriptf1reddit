import { Response, Request } from "express"
import { ISeason } from "../types/seasonType"
import Season from "../models/seasonModel"
import { IDivision } from "../types/divisionType"
import Division from "../models/divisionModel"
import {IDriverSeason} from "../types/driverSeasonType"
import DriverSeason from "../models/driverSeasonModel"
import {IRace} from "../types/raceType"
import Race from "../models/raceModel"
import {IResult} from "../types/resultType"
import Result from "../models/resultModel"

const getResults = async (req:Request, res:Response): Promise<void> => {
    try{
        const results: IResult[] = await Result.find()
        res.status(200).json({results})     
    }catch(error){
        res.status(500).json({message: "Error getting results"})
    }
}

const addResult = async (req:Request, res:Response):Promise<void> => {
    try {
        const body = req.body as Pick<IResult,"position"|"driverSeason"
        |"fastestLap"|"leaderGap"|"penalties"|"race">

        const result : IResult = new Result({
            position:body.position,
            driverSeason:body.driverSeason,
            fastestLap:body.fastestLap,
            leaderGap:body.leaderGap,
            penalties:body.penalties,
            race:body.race
        })
        const newResult: IResult = await result.save()
        const allResults: IResult[] = await Result.find()

        const driverSeason : IDriverSeason | null = 
        await DriverSeason.findById(result.driverSeason)

        if(!driverSeason){
            throw 'driverSeason not found'
        }
        driverSeason.results.push(result.id)
        driverSeason.save()

        res.status(201).json({
            message:"Added Race",
            newResult: newResult,
            allResults: allResults
        })
    } catch (error) {
        res.status(500).json({message: "Error adding result"})
    }
}
export { getResults, addResult}