import "express";

declare module "express" {
	interface Request {
		timeStamp?: number;
	}
}
