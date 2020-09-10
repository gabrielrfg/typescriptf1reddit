import { Response, Request } from "express";
import { ISeason } from "../types/seasonType";
import Season from "../models/seasonModel"
import { IDivision } from "../types/divisionType";
import Division from "../models/divisionModel"

const getSeasons = async (req:Request, res:Response): Promise<void> => {
    try{
        const seasons: ISeason[] = await Season.find()
        res.status(200).json({seasons})     
    }catch(error){
        res.status(500).json({message: "Error getting seasons"})
    }
}

const addSeason = async (req:Request, res:Response):Promise<void> => {
    try {
        const body = req.body as Pick<ISeason,"number"|"year"|"division"|"driversSeasons"|"races">

        const season : ISeason = new Season({
            number: body.number,
            year: body.year,
            division: body.division,
            driversSeasons: body.driversSeasons,
            races: body.races
        })
        //todo: check driver season

        //check if the division exists
        const division : IDivision | null = await Division.findById(season.division)
        if(!division){
            throw 'Division not found'
        }
        const newSeason: ISeason = await season.save()
        division.seasons.push(newSeason.id)
        const updatedDivision = await division.save()

        const allSeasons: ISeason[] = await Season.find()

        res.status(201).json({
            message:"Added Season",
            season: newSeason,
            allSeasons: allSeasons,
            division: updatedDivision
        })
    } catch (error) {
        res.status(500).json({message: "Error adding season"})
    }
}
export { getSeasons, addSeason}