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
exports.addSeason = exports.getSeasons = void 0;
const seasonModel_1 = __importDefault(require("../models/seasonModel"));
const divisionModel_1 = __importDefault(require("../models/divisionModel"));
const getSeasons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seasons = yield seasonModel_1.default.find();
        res.status(200).json({ seasons });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting seasons" });
    }
});
exports.getSeasons = getSeasons;
const addSeason = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const season = new seasonModel_1.default({
            number: body.number,
            year: body.year,
            division: body.division,
            driversSeasons: body.driversSeasons,
            races: body.races
        });
        //todo: check driver season
        //check if the division exists
        const division = yield divisionModel_1.default.findById(season.division);
        if (!division) {
            throw 'Division not found';
        }
        const newSeason = yield season.save();
        division.seasons.push(newSeason.id);
        const updatedDivision = yield division.save();
        const allSeasons = yield seasonModel_1.default.find();
        res.status(201).json({
            message: "Added Season",
            season: newSeason,
            allSeasons: allSeasons,
            division: updatedDivision
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding season" });
    }
});
exports.addSeason = addSeason;
