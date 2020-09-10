"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const driverSchema = new mongoose_1.Schema({
    name: String,
    driverSeasons: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'DriverSeason' }]
});
exports.default = mongoose_1.model("Driver", driverSchema);
