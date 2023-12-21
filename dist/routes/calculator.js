"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
exports.router = (0, express_1.Router)();
exports.router.use(middleware_1.logger);
// router.use(calculatorValidator)
exports.router.get("/", middleware_1.logger, middleware_1.logger, (req, res) => {
    console.log(req.path);
    res.send({
        message: "Get All Calculations",
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 },
        ],
    });
});
exports.router.get("/:id", (req, res) => {
    console.log(req.path);
    res.send({
        message: "Get Calculation by ID",
        id: req.params.id,
        result: 1,
    });
});
exports.router.post("/", middleware_1.calculatorValidator, (req, res) => {
    // console.log(req.body);
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case "*":
            result = operand1 * operand2;
            break;
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        default:
            result = "invalid operator";
            break;
    }
    res.send({
        message: "Create New Calculation",
        timestamp: req.timeStamp,
        result: result,
    });
});
