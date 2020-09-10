"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const resultSchema = new mongoose_1.Schema({
    position: Number,
    driverSeason: { type: mongoose_1.Schema.Types.ObjectId, ref: 'DriverSeason' },
    fastestLap: Boolean,
    leaderGap: Number,
    penalties: Number,
    race: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Race' }
});
exports.default = mongoose_1.model("Result", resultSchema);
