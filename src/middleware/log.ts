import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
	console.log(`
	request-timestamp : ${req.timeStamp}
	request-method : ${req.method}, \n
	request-ip : ${req.ip}, \n
	request-original-url : ${req.url}, \n
	 `);

	next();
}
