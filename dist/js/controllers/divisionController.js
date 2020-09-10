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
exports.addDivision = exports.getDivisions = void 0;
const divisionModel_1 = __importDefault(require("../models/divisionModel"));
const leagueModel_1 = __importDefault(require("../models/leagueModel"));
const getDivisions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const divisions = yield divisionModel_1.default.find();
        res.status(200).json({ divisions });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting divisions" });
    }
});
exports.getDivisions = getDivisions;
const addDivision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const division = new divisionModel_1.default({
            league: body.league,
            platform: body.platform,
            number: body.number
        });
        const league = yield leagueModel_1.default.findById(division.league); //get the division's league
        if (!league) {
            throw 'League not found';
        }
        const newDivision = yield division.save(); //save new division
        league.divisions.push(newDivision.id);
        const updatedLeague = yield league.save();
        const allDivisions = yield divisionModel_1.default.find();
        res.status(201)
            .json({ message: "Division added", division: newDivision, allDivisions: allDivisions, league: updatedLeague });
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding division' });
    }
});
exports.addDivision = addDivision;
