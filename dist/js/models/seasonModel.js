"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const seasonSchema = new mongoose_1.Schema({
    number: Number,
    year: Number,
    division: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Division' },
    driversSeasons: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'DriverSeason' }],
    races: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Race' }]
});
exports.default = mongoose_1.model("Season", seasonSchema);
