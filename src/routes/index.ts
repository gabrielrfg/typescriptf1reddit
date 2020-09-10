import { Router } from "express"
import { getLeagues, addLeague, updateLeague, deleteLeague } from "../controllers/leagueController"
import { getDivisions, addDivision } from "../controllers/divisionController"
import { getSeasons, addSeason} from "../controllers/seasonController"
import { getDrivers, addDriver} from "../controllers/driverController"
import { getDriverSeasons, addDriverSeason} from "../controllers/driverSeasonController"
import { getRaces, addRace } from "../controllers/raceController"
import { getResults, addResult } from "../controllers/resultController"

const router: Router = Router()

router.get("/leagues", getLeagues)

router.post("/add-league", addLeague)

router.put("/edit-league/:id", updateLeague)

router.delete("/delete-league/:id", deleteLeague)

router.get("/divisions", getDivisions)

router.post("/add-division", addDivision)

router.get("/seasons", getSeasons)

router.post("/add-season", addSeason)

router.get("/drivers", getDrivers)

router.post("/add-driver", addDriver)

router.get("/driverSeasons", getDriverSeasons)

router.post("/add-driverSeason", addDriverSeason)

router.get("/races", getRaces)

router.post("/add-race", addRace)

router.get("/results", getResults)

router.post("/add-result", addResult)


export default router