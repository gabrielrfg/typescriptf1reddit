"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const driverSeasonSchema = new mongoose_1.Schema({
    driver: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Driver' },
    fastestLaps: Number,
    points: Number,
    season: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Season' },
    results: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Result' }]
});
exports.default = mongoose_1.model("DriverSeason", driverSeasonSchema);
