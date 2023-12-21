import { Response, Request, NextFunction, Router } from "express";
import { calculatorValidator, logger } from "../middleware";
import { CalculatorRequestBody } from "../types";

export const router = Router();

router.use(logger);
// router.use(calculatorValidator)

router.get("/", logger, logger, (req, res) => {
	console.log(req.path);
	res.send({
		message: "Get All Calculations",
		data: [
			{ id: 1, result: 1 },
			{ id: 2, result: 2 },
		],
	});
});

router.get("/:id", (req, res) => {
	console.log(req.path);
	res.send({
		message: "Get Calculation by ID",
		id: req.params.id,
		result: 1,
	});
});

router.post(
	"/",
	calculatorValidator,
	(req: Request<{}, any, CalculatorRequestBody>, res: Response) => {
		// console.log(req.body);
		const { operator, operand1, operand2 } = req.body;
		let result: number | string;
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
	}
);
