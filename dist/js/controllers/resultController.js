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
exports.addResult = exports.getResults = void 0;
const driverSeasonModel_1 = __importDefault(require("../models/driverSeasonModel"));
const resultModel_1 = __importDefault(require("../models/resultModel"));
const getResults = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield resultModel_1.default.find();
        res.status(200).json({ results });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting results" });
    }
});
exports.getResults = getResults;
const addResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = new resultModel_1.default({
            position: body.position,
            driverSeason: body.driverSeason,
            fastestLap: body.fastestLap,
            leaderGap: body.leaderGap,
            penalties: body.penalties,
            race: body.race
        });
        const newResult = yield result.save();
        const allResults = yield resultModel_1.default.find();
        const driverSeason = yield driverSeasonModel_1.default.findById(result.driverSeason);
        if (!driverSeason) {
            throw 'driverSeason not found';
        }
        driverSeason.results.push(result.id);
        driverSeason.save();
        res.status(201).json({
            message: "Added Race",
            newResult: newResult,
            allResults: allResults
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding result" });
    }
});
exports.addResult = addResult;
