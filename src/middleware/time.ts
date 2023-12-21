import { Request, Response, NextFunction } from "express";

export function addTimeStamp(req: Request, res: Response, next: NextFunction) {
	req.timeStamp = Date.now();
	next();
}
