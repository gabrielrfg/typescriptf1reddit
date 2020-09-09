import { Response, Request } from "express";
import { IDivision } from "../types/divisionType";
import Division from "../models/divisionModel";
import { ILeague } from "../types/leagueType";

const getDivisions = async (req: Request, res: Response): Promise<void> => {
  try {
    const divisions: IDivision[] = await Division.find()
    res.status(200).json({ divisions })
  } catch (error) {
    throw error
  }
}

const addDivision = async (req: Request, res: Response): Promise<void> =>{
  try{
    const body = req.body as Pick<IDivision, "league" | "platform" | "number"> 
    const division : IDivision = new Division({
      league: body.league,
      platform: body.platform,
      number: body.number
    })

    const newDivision : IDivision = await division.save()
    const allDivisions : IDivision[] = await Division.find()

    res.status(201)
    .json({message: "Division added", division: newDivision, allDivisions: allDivisions})
  }catch(error){
    throw error
  }
}

export { getDivisions, addDivision }
