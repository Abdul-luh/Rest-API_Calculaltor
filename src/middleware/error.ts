import { Request, Response, NextFunction } from "express";

export function ErrorHandler(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log(err.stack);
	res.status(500).send(err.message);
	next();
}
