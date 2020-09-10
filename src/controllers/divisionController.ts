import { Response, Request } from "express";
import { IDivision } from "../types/divisionType";
import Division from "../models/divisionModel";
import { ILeague } from "../types/leagueType";
import League from "../models/leagueModel";

const getDivisions = async (req: Request, res: Response): Promise<void> => {
  try {
    const divisions: IDivision[] = await Division.find()
    res.status(200).json({ divisions })
  } catch (error) {
    res.status(500).json({message: "Error getting divisions"})
  }
}

const addDivision = async (req: Request, res: Response): Promise<void> =>{
  try{
    const body = req.body as Pick<IDivision, "league" | "platform" | "number" | "seasons"> 
    const division : IDivision = new Division({
      league: body.league,
      platform: body.platform,
      number: body.number
    })
    const league : ILeague | null = await League.findById(division.league)//get the division's league
    if(!league){
      throw 'League not found'
    }

    const newDivision : IDivision = await division.save()//save new division
    league.divisions.push(newDivision.id)
    const updatedLeague = await league.save()

    const allDivisions : IDivision[] = await Division.find()
    res.status(201)
    .json({message: "Division added", division: newDivision, allDivisions: allDivisions, league: updatedLeague})
  }catch(error){
    res.status(500).json({message: 'Error adding division'})
  }
}

export { getDivisions, addDivision }
