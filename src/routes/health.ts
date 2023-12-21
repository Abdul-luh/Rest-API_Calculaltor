import { Request, Router } from "express";
import { ErrorHandler } from "../middleware";

export const router = Router();

router.use(ErrorHandler);

router.get("/", (req: Request, res) => {
	console.log(req.path);
	throw new Error("Application Error");
	res.send({ message: "ok", timeStamp: req.timeStamp });
});
