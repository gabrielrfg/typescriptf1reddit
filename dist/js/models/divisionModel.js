"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const divisionSchema = new mongoose_1.Schema({
    league: { type: mongoose_1.Schema.Types.ObjectId, ref: 'League' },
    platform: String,
    number: Number
});
exports.default = mongoose_1.model("Division", divisionSchema);
