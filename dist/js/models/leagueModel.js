"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const leagueSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    divisions: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Division' }]
});
exports.default = mongoose_1.model("League", leagueSchema);
