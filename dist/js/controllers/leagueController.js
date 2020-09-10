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
exports.deleteLeague = exports.updateLeague = exports.addLeague = exports.getLeagues = void 0;
const leagueModel_1 = __importDefault(require("../models/leagueModel"));
const getLeagues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leagues = yield leagueModel_1.default.find();
        res.status(200).json({ leagues });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting leagues" });
    }
});
exports.getLeagues = getLeagues;
const addLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const league = new leagueModel_1.default({
            name: body.name,
        });
        const newLeague = yield league.save();
        const allLeagues = yield leagueModel_1.default.find();
        res
            .status(201)
            .json({ message: "League added", league: newLeague, leagues: allLeagues });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding league" });
    }
});
exports.addLeague = addLeague;
const updateLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateLeague = yield leagueModel_1.default.findByIdAndUpdate({ _id: id }, body);
        const allLeagues = yield leagueModel_1.default.find();
        res.status(200).json({
            message: "League updated",
            league: updateLeague,
            leagues: allLeagues,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateLeague = updateLeague;
const deleteLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedLeague = yield leagueModel_1.default.findByIdAndRemove(req.params.id);
        const allLeagues = yield leagueModel_1.default.find();
        res.status(200).json({
            message: "League deleted",
            league: deletedLeague,
            leagues: allLeagues,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteLeague = deleteLeague;
