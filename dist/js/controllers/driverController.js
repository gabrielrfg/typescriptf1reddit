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
exports.addDriver = exports.getDrivers = void 0;
const driverModel_1 = __importDefault(require("../models/driverModel"));
const getDrivers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drivers = yield driverModel_1.default.find();
        res.status(200).json({ drivers });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting drivers" });
    }
});
exports.getDrivers = getDrivers;
const addDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const driver = new driverModel_1.default({
            name: body.name,
            driverSeasons: body.driverSeasons
        });
        const newDriver = yield driver.save();
        const allDrivers = yield driverModel_1.default.find();
        res.status(201).json({
            message: "Added Driver",
            driver: newDriver,
            allDrivers: allDrivers
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding driver" });
    }
});
exports.addDriver = addDriver;
