"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRace = exports.getRaces = void 0;
const seasonModel_1 = __importDefault(require("../models/seasonModel"));
const raceModel_1 = __importDefault(require("../models/raceModel"));
const getRaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const races = yield raceModel_1.default.find();
        res.status(200).json({ races });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting races" });
    }
});
exports.getRaces = getRaces;
const addRace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const race = new raceModel_1.default({
            season: body.season,
            date: body.date,
            results: body.results
        });
        const newRace = yield race.save();
        const allRaces = yield raceModel_1.default.find();
        const season = yield seasonModel_1.default.findById(race.season);
        if (!season) {
            throw 'Season not found';
        }
        season.races.push(race.id);
        season.save();
        res.status(201).json({
            message: "Added Race",
            newRace: newRace,
            allRaces: allRaces
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding race" });
    }
});
exports.addRace = addRace;
