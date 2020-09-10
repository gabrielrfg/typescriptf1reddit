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
exports.addDriverSeason = exports.getDriverSeasons = void 0;
const driverSeasonModel_1 = __importDefault(require("../models/driverSeasonModel"));
const getDriverSeasons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const driverSeasons = yield driverSeasonModel_1.default.find();
        res.status(200).json({ driverSeasons });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting driverSeasons" });
    }
});
exports.getDriverSeasons = getDriverSeasons;
const addDriverSeason = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const driverSeason = new driverSeasonModel_1.default({
            driver: body.driver,
            fastestLaps: body.fastestLaps,
            points: body.points,
            season: body.season,
            results: body.results
        });
        const newDriverSeason = yield driverSeason.save();
        const allDriverSeasons = yield driverSeasonModel_1.default.find();
        res.status(201).json({
            message: "Added DriverSeason",
            driverSeason: newDriverSeason,
            allDriverSeasons: allDriverSeasons
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding driverSeason" });
    }
});
exports.addDriverSeason = addDriverSeason;
