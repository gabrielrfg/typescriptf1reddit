import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import routes from "./routes"
//TESTING IMPORTS
import leagueModel from "./models/leagueModel"
import divisionModel from "./models/divisionModel"
import {IDivision} from "./types/divisionType"
import bodyParser from "body-parser"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(routes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@f1reddit.2tznv.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>{
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  }
  )
  .catch(error => {
    throw error
  });

//divisionModel.create({league:"5f5818ed12e65f10503bb672", platform: "PC", number:1})

