import { Request, Response, NextFunction } from "express";
import { CalculatorRequestBody } from "../types";

export function calculatorValidator(
	req: Request<{}, any, CalculatorRequestBody>,
	res: Response,
	next: NextFunction
) {
	const { operand1, operand2, operator } = req.body;
	if (typeof operand1 !== "number" || typeof operand2 !== "number") {
		return res.status(400).send("operands must be numbers");
	}
	if (
		operator !== "*" &&
		operator !== "+" &&
		operator !== "-" &&
		operator !== "/"
	) {
		return res.status(400).send("Operator must be +, -, /, or *");
	}

	next();
}
