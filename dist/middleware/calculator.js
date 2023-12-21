"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorValidator = void 0;
function calculatorValidator(req, res, next) {
    const { operand1, operand2, operator } = req.body;
    if (typeof operand1 !== "number" || typeof operand2 !== "number") {
        return res.status(400).send("operands must be numbers");
    }
    if (operator !== "*" &&
        operator !== "+" &&
        operator !== "-" &&
        operator !== "/") {
        return res.status(400).send("Operator must be +, -, /, or *");
    }
    next();
}
exports.calculatorValidator = calculatorValidator;
