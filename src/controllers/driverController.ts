import { Response, Request } from "express"
import { ISeason } from "../types/seasonType"
import Season from "../models/seasonModel"
import { IDivision } from "../types/divisionType"
import Division from "../models/divisionModel"
import {IDriver} from "../types/driverType"
import Driver from "../models/driverModel"

const getDrivers = async (req:Request, res:Response): Promise<void> => {
    try{
        const drivers: IDriver[] = await Driver.find()
        res.status(200).json({drivers})     
    }catch(error){
        res.status(500).json({message: "Error getting drivers"})
    }
}

const addDriver = async (req:Request, res:Response):Promise<void> => {
    try {
        const body = req.body as Pick<IDriver,"name"|"driverSeasons">

        const driver : IDriver = new Driver({
            name: body.name,
            driverSeasons: body.driverSeasons
        })
        const newDriver: IDriver = await driver.save()
        const allDrivers: IDriver[] = await Driver.find()

        res.status(201).json({
            message:"Added Driver",
            driver: newDriver,
            allDrivers: allDrivers
        })
    } catch (error) {
        res.status(500).json({message: "Error adding driver"})
    }
}
export { getDrivers, addDriver}