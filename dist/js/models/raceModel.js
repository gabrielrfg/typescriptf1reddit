"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const raceSchema = new mongoose_1.Schema({
    season: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Season' },
    date: mongoose_1.Schema.Types.Date,
    results: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Result' }]
});
exports.default = mongoose_1.model("Race", raceSchema);
