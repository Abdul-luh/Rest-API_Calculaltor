"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
exports.router = (0, express_1.Router)();
exports.router.use(middleware_1.ErrorHandler);
exports.router.get("/", (req, res) => {
    console.log(req.path);
    throw new Error("Application Error");
    res.send({ message: "ok", timeStamp: req.timeStamp });
});
