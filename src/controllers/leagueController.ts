import { Response, Request } from "express";
import { ILeague } from "../types/leagueType";
import League from "../models/leagueModel";


const getLeagues = async (req: Request, res: Response): Promise<void> => {
  try {
    const leagues: ILeague[] = await League.find()
    res.status(200).json({ leagues })
  } catch (error) {
    res.status(500).json({message: "Error getting leagues"})
  }
}

const addLeague = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<ILeague, "name" | "divisions">
  
      const league: ILeague = new League({
        name: body.name,
      })
  
      const newLeague: ILeague = await league.save()
      const allLeagues: ILeague[] = await League.find()
  
      res
        .status(201)
        .json({ message: "League added", league: newLeague, leagues: allLeagues })
    } catch (error) {
      res.status(500).json({message: "Error adding league"})
    }
  }

  const updateLeague = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateLeague: ILeague | null = await League.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allLeagues: ILeague[] = await League.find()
      res.status(200).json({
        message: "League updated",
        league: updateLeague,
        leagues: allLeagues,
      })
    } catch (error) {
      throw error
    }
  }

  const deleteLeague = async (req: Request, res: Response): Promise<void> => {
      try{
          const deletedLeague: ILeague | null = await League.findByIdAndRemove(req.params.id)
      const allLeagues: ILeague[] = await League.find()
      res.status(200).json({
        message: "League deleted",
        league: deletedLeague,
        leagues: allLeagues,
      })
    } catch (error) {
      throw error
    }
  }

  export { getLeagues, addLeague, updateLeague, deleteLeague}