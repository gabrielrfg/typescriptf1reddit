import { Router } from "express"
import { getLeagues, addLeague, updateLeague, deleteLeague } from "../controllers/leagueController"
import { getDivisions, addDivision } from "../controllers/divisionController"

const router: Router = Router()

router.get("/leagues", getLeagues)

router.post("/add-league", addLeague)

router.put("/edit-league/:id", updateLeague)

router.delete("/delete-league/:id", deleteLeague)

router.get("/divisions", getDivisions)

router.post("/add-division", addDivision)


export default router